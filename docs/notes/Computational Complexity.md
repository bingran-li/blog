---
aliases: Notes Computational Complexity
tags:
  - blog
  - computation
type: 
created: 2025-03-12
modified: 2025-03-13
---
# 动机 Motivation
Books:
- [Computational Complexity: A Modern Approach](https://theory.cs.princeton.edu/complexity/book.pdf)![image](/bfda3025cd9bce79d16c1fe1a9431b8.jpg)
- [The Nature Of Computation](https://nature-of-computation.org/~moore/noc/index.php)  <br>
- 为什么学习计算复杂度？ #2025/3/12  
	更确切的说，我想系统地学习问题（problems）、建模（modelling）、公式化（formulation）和算法（algorithms）的本质，那么我不可不学习计算。孙若愚教授在他的Optimization in Machine Learning中曾说，"*解决一个问题，CS学者非常精通设计algorithm，但是他们中很少有人意识到（或者说他们很晚才意识到）对问题的公式化formulation的重要性*。"例如政治学和经济学，就是在对世界进行建模。使用一些公理与假设，然后写出问题的formulation，再用算法找解（solution）。**而一个简洁、合适的formulation才能更好地设计算法去解决**。例如，在优化中，问题的凸性是很好的性质（局部最优意味着全局最优），那么一部分问题的formulation一开始不是凸的，但我们可以用一些操作，或者放宽条件（relax）来使得问题变成凸的。如此这般，便有许多现成的快速的凸优化算法可以去给出解（即便可能不是原问题的可行解 （feasible solution））。

对于计算一个问题的难度，我们使用计算复杂度来分析它。但是这样一个问题必须是不能预先知道知道答案的吗？例如下象棋，找到一个“白棋有一个致胜的策略”是很难的。但如果我已经找到了，那这个问题的状态便已经是“已解决”，是一个已解决的难解的问题。这是不是与未知解的难解的问题，有本质区别呢？///好吧，事实证明我错了，因为计算复杂度的研究对象是计算**一类**问题的运行时间或者空间与输入参数大小的渐进关系。$O(), \Omega(), \Theta()$。

# 基本知识 Basics
Problem=Input+Question <br>
例如，yes-or-no questions某个东西存不存在，是decision problems； 而找出这个东西，是search problem or function problem。  
algorithm: input -> correct answer as ouput.  

adversary?
## Polynomial Matters
#20253/14
摩尔定律说，处理速度每两年翻倍，那么一个运行时间为$\Theta(n)$，的算法，如果问题的规模$n$翻倍，速度的翻倍仍然让我能够在相同时间运行这个算法。但是如果一个算法是$\Theta(2^n)$，处理速度翻倍，要想在同样时间运行算法，我们只能让问题的规模$n$加一。
![](/屏幕截图_14-3-2025_151952_.jpeg) ref: [The Nature Of Computation](https://nature-of-computation.org/~moore/noc/index.php).
sublinear algorithm?
## The Nature of A Problem
判断一个图是否存在Euler's circuit（一次走完所有边edge）这个问题，有一个非常简单的充分必要条件，每个点的度是偶数（除了某两个端点）。而判断一个图是否有哈密顿路径（一次走完所有点vertex），则暂时没有一个简单的充分必要条件。那么我们说，前一个问题比后一个问题，本质上要更难。
## Turing Machine 图灵机
- Definition (Turing Machine): A class of model that contains tape, head... Something like an algorithm, which processes an input and outputs "accept" or "reject".
- Decision problem/Language $L$: defined by the preimage of an algorithm/machine $f$.
- Definition (**P**): A Language is in **P** if and only if there is a deterministic Turing machine that runs in time $O(n^c)$ and decides L (all possible input). Remark: **P** will vary from machine to machine (e.g. Turing machine and other machines).  

**P**-complete:
- Conjecture: $P\neq NC$. Therefore, the class **[P-complete](https://en.wikipedia.org/wiki/P-complete "P-complete")**, when using **[NC](https://en.wikipedia.org/wiki/NC_\(complexity\))** reductions, can be thought of as "probably not parallelizable" or "probably inherently sequential"(Wiki).

The upper bound and lower bound of the complexity of a problem. The *best* algorithm gives the complexity of the problem. Take *integer multiplication* as an example: we can decompose the inputs x and y into two pieces, we will get $T(n)=3T(n/2)+O(n)$. This gives $T(n)=\Theta(n^{\alpha})$, where $\alpha=\log_2 3$. In fact, $\alpha$ can be arbitrary close to one (Justify it). On the other hand, the trivial lower bound in $\Omega(n)$. 
- [ ] Then thinking about policy iteration in MDP, the worst case is exponential. Thinking about this! #todo

Model: A framework defining how computations are executed. Examples include:
- **Turing Machines (TMs)**: Use an infinite tape, read/write head, and state transitions.
- **Quantum Computers**: Use qubits, superposition, and quantum gates.
- **Lambda Calculus**: Uses function abstraction and application.
- **Neural Networks**: Use interconnected nodes (neurons) with weighted connections.
