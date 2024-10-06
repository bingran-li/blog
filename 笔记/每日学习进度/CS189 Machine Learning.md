---
comment: true
---

#CS #ML 

课程官网：[Home | CS 189/289A (eecs189.org)](https://eecs189.org/)
# [[regularization]]
#2024/10/3 
- [x] lecture 5 linear regression 2

feature selection/add constraints
Issue: there are infinity numbers of $w_{MLE}$ solutions. (By directly computation, or use graph to illustrate). We need to pick one. Criteria: Choose the $\hat{w}$ with the smallest norm.
MLE yields a point estimate of our parameter through maximize $p(D|\theta)$. It may be not good.
### L2 regression/Ridge regression(shrinkage)

^5b9cfc

add $\lambda ||w||_2^2$ to the loss function

It's equivalent to [[Bayesian modeling]]

### Bayesian modelling (Maximum A Posterior)
$$\begin{aligned}
\theta_{MAP}&=argmax_{\theta} p(\theta|D)\\
&=argmax_{\theta}P(D).
\end{aligned}$$
A prior for small weights ([[Q]]: What's the meaning?) yields [[#^5b9cfc|L2 regression]]


### Obtain the MAP/L2 Solution
$w_{L_2}=argmin_{w} (y-Aw)^T(y-Aw)+\lambda ||w||_2^2$
Take partial derivative([[Q]]: how to do it?) and set to zero.
$w_{L_2}=(A^TA+\lambda I)^{-1}A^Ty.$ (If $\lambda \>0$ we can invert the above.)??
>[!note] Remark
>$A$ is "design matrix" or data matrix.
>When the features in data set are independent, A has full column rank, and $A^TA$ has full rank.

[[Q]]: train/validation/test split

### L1-penalized linear regression (*Lasso*)
use $L_1$ norm, which tends to induce sparse $w$.
It also corresponds to Laplace prior.


# Logistic Regression
#2024/10/4 
- [x] lecture 6
The output is not a real number, but a **label**.
## Procedure
- class-conditional probabilities is assumed to be know $p(x|0)$, $p(x|1)$.
- Use [[Bayes]] rule to go from class-conditional prob to the posterior probability: $p(0|x)$, $p(1|x)$.
- pick $k$ such that $p(k|x)$ is maximal, which minimize the probability of misclassification:
$$p(error)=\int p(error|x)p(x)dx$$
Issue: the consequences of false negatives are much worse than false positives.

## three ways of building classifiers:
- Generative
	- model the class-conditional prob
	- model the prior $p(k)$
	- obtain posteriors
- Discriminative: model $p(k|x)$ explicitly
- Find decision boundaries $f:\mathscr{X}\rightarrow \{0,1,\dots,K-1\}$


## [[logistic]] regression
### Binary output
Model the posterior probability by a logistic function
$p(k=0|x)=\frac{1}{1+exp^{-(\theta_1 x+\theta_0)}}$.(1D)

The reason of choosing this function:
- Given the $p(x|k)$ Gaussian with the same variance, the posterior is a logistic function of an affine transformation of $x\in \mathbb{R}^{d}$.

### [[Q]] odds?
$p/(1-p) \in [0,\infty)$
$\log p/(1-p) \in (-\infty,\infty)$
Now we can have a linear model for the log-odds:
$$logit (p)=\theta^Tx+\theta_0.$$
To be continue... MLE of $\theta$.

# Linear Regression

^3cb361

## Inference stage
we get [[Maximum Likelihood Estimator]] from the [[error function]].
## Decision stage
In [[decision theory]], we need a point estimator $f(x)$ rather than a distribution $p(t|x)$. We can derive the point estimator by minimizing a square-[[loss function]]:
$$L(f(x),t)=(f(x)-t)
$$$$
min_{f(x)} E[L]$$


## The Bias–Variance Trade-off
[[Q]]: Suppose we had a large number of data sets each of size $N$ and each drawn independently from the distribution $p(t, x)$. For any given data set $D$, we can run our learning algorithm and obtain a prediction function $f(x; D).$
What is the mathematical formulation?