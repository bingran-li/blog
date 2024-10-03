---
comment: true
---

#CS #ML 

课程官网：[Home | CS 189/289A (eecs189.org)](https://eecs189.org/)
# Day1 (2024/10/3)
- [x] lecture 5 linear regression 2
## regularization
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


## Logistic Regression

