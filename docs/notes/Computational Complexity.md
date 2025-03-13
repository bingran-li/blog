---
aliases: Notes Computational Complexity
tags:
  - blog
  - computation
type: 
created: 2025-03-12
modified: 2025-03-13
---
# 
Book:
- [Computational Complexity: A Modern Approach](https://theory.cs.princeton.edu/complexity/book.pdf)![image](/bfda3025cd9bce79d16c1fe1a9431b8.jpg)
- [The Nature Of Computation](https://nature-of-computation.org/~moore/noc/index.php)

- 为什么学习计算复杂度？ #2025/3/12
	更确切的说，我想系统地学习问题（problems）、建模（modelling）、公式化（formulation）和算法（algorithms）的本质，那么我不可不学习计算。孙若愚教授在他的Optimization in Machine Learning中曾说，"*解决一个问题，CS学者非常精通设计algorithm，但是他们中很少有人意识到（或者说他们很晚才意识到）对问题的公式化formulation的重要性*。"例如政治学和经济学，就是在对世界进行建模。使用一些公理与假设，然后写出问题的formulation，再用算法找解（solution）。**而一个简洁、合适的formulation才能更好地设计算法去解决**。例如，在优化中，问题的凸性是很好的性质（局部最优意味着全局最优），那么一部分问题的formulation一开始不是凸的，但我们可以用一些操作，或者放宽条件（relax）来使得问题变成凸的，如此这般，便有许多现成的快速的凸优化算法可以去给出解（即便可能不是原问题的可行解feasible solution）。

对于计算一个问题的难度，我们使用计算复杂度来分析它。但是这样一个问题必须是不能预先知道知道答案的吗？例如下象棋，找到一个“白棋有一个致胜的策略”是很难的。但如果我已经找到了，那这个问题的状态便已经是“已解决”，是一个已解决的难解的问题。这是不是与未知解的难解的问题，有本质区别呢？

# 基本知识
Problem=Input+Question，
例如，yes-or-no questions某个东西存不存在，是decision problems； 而找出这个东西，是search problem or function problem。
algorithm: input -> correct answer as ouput.
adversary?