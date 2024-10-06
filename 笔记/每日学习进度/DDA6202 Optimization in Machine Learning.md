---
comment: true
tags:
  - Optimization
  - ML
  - DL
  
---

# Deep Leaning Overview
## Data+Algorithm+Model (High-level decomposition)

## Error Decomposition (Mid-level)
[[test error]]= training error + generalization gap
	=representation error + optimization error + generalization gap

## [[neural network|Neural Network]] Optimization (Low-level decomposition)
Day 1 #2024/10/4 
### Two issues: 
- Local issue: convergence issue & convergence speed issue
- Global issue: local-global error

### Difference between [[local-global error]] and [[representation error]]
Question: in reality, suppose the training error of the last epoch are 16.1%, 16.07%, 16.04%, how to justify which situation we encounter?

Methods to solve the two issue:
- Proper [[initialization]]
- [[normalization]]
- [[skip connection]]
- wide network

For wide net, we have smoother landscape. In theory, the benefit of width is eliminate bad basin. [Li, Ding, Sun'2018]

Alternative methods: Training 10000-layer CNN, without skip connection or normalization.
- orthogonal initialization (works for convergence issue)
- wide network

Width & Skip connection: make overall landscape good enough; no bad basin.
Initialization & [[regularization]]: make the path of optimization lie on a good local landscape.

### How to use [[neural network|NN]] better
- For new field
	data, computation, neural-net training
- framework design
	Wide, deep, CCN or Attention; add [[skip connection]]
- training trick
	initialization, normalization
- track performance metric
- Recommendation:
	- compute the distribution of gradient norm for different layers
	- compute NTK's spectrum
	- compute the metric of expressiveness


# Model
Learning a map $f_{\theta}$
## [[loss function]]
in deep learning, we minimize a loss consisting of a bunch of  loss function.
[[Q]]: the difference between the error and loss function in  [[CS189 Machine Learning#^3cb361|linear regression]] and the loss here.


# [[initialization]]
