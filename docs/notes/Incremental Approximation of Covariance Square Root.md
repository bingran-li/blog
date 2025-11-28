#2025/11/1 [[JL lemma]]
# Overview
This algorithm incrementally approximates the square root of a covariance matrix **$Σ ∈ ℝ^{d×d}$** using low-rank updates and singular value decomposition (SVD). It avoids explicitly computing the inverse covariance or full matrix square roots, making it scalable for high-dimensional data. We try to use it to approximate **Adagrad**'s preconditioner.

---

# Algorithm Steps

### 1. **Initialization**
- **Input**: 
  - Initial inverse covariance **$Σ₀⁻¹ ∈ ℝ^{d×d}$** (regularized for stability).
  - Random matrix **$Z₀ ∈ ℝ^{d×m}$** for initialization.
  - Regularization parameter **λ** (e.g., `λ = 1e-3`).
- **Precompute**:
  - $Σ₀⁻¹/² = sqrtm(inv(Σ₀⁻¹))$ (initial square root of inverse covariance).

### 2. **Incremental Update** for sqrt inv
For each new data point **xₜ ∈ $ℝ^d$**:
1. **Update Inverse Covariance**:
   $$
   Gₜ = G_{t-1} + xₜ xₜ^T \quad (\text{rank-1 update}).
   $$
2. **Compute Current Covariance**:
$$
G^{-1}_t = G^{-1}_{t-1} - \frac{G^{-1}_{t-1} x_t x_t^T G^{-1}_{t-1}}{1 + x_t^T G^{-1}_{t-1} x_t}.
$$
3. **Update Low-Rank Factor**:
   $$
   Aₜ = G_{0}^{1/2} Z₀ + \sum_{s=1}^t xₛ zₛ^T,
   $$
   where **zₛ ∈ ℝ^m** is a random vector.
4. **incremental SVD of Aₜ**:
   $$Aₜ = Uₜ Sₜ Vₜ^T \quad \Rightarrow \quad \text{Approximate } G^{1/2}_{t} \approx Uₜ Sₜ Uₜ^T.$$
5. **Approximate $G_t^{-1/2}$**
$$
G^{-1/2}_{t} = G^{-1}_{t} G_{t}^{1/2}\approx G_{t}^{-1} U_{t} S_{t} U_{t}^T
$$


---
# Approximate Adagrad's preconditioner
- **Adagrad**  
    Define the inverse preconditioner $P_t=\sum_{i=0}^t g_ig_i^T$. We omit subscript $t$ for simplicity. For any gradient vector $g$ we have  $$  (P g)^\top g \ge 0,  $$  
    because $P$ is positive semidefinite.

- **Empirical consequence**  
    In experiments we observe that the cosine similarity between $\tilde P g$ and $P g$,  
    $$  
    \frac{(\tilde P g)^\top (P g)}{\|\tilde P g\| \|P g\|},  
    $$  
    can be negative. This indicates that even though $\tilde P g$ is a descent direction, it can be a poor estimator of $P g$. The reason is as follow:
    
- (Theoretical reason.) Let $\tilde P$ be a low-rank approximation of $P$. Although $\tilde P$ has many zero eigenvalues, it is also positive semidefinite, therefore for any $g$  
    $$  
    (\tilde P g)^\top g \ge 0.  
    $$
    Hence $\tilde P g$ is a descent direction.
    However, the inner product between the two preconditioned gradients  
    $$  
    (\tilde P g)^\top (P g)  
    $$
    need not be positive in general. That is, $\tilde P P$ is not guaranteed to be positive semidefinite. A sufficient condition for $\tilde P P$ to be positive semidefinite is that $\tilde P$ and $P$ are both positive semidefinite and they commute: 
    $$  
    \tilde P P = P \tilde P.  
    $$
    By construction, $\tilde P$ and $P$ almost surely do not commute. Therefore the sufficient condition above typically does not hold. In conclusion, $\tilde P g$ is a poor estimator of $P g$
