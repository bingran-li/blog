---
aliases: Generate approximately independent random variables, Nearly Equiangular Lines, Tight Frame, the maximum number of almost orthogonal unit vectors in Rd
tags: 
  - project
  - literature
  - probability
  - combinatorics
  - blog
created: 2025-03-24
modified: 2025-03-31
---
*key words:* [[Sherman-Morrison-Woodbury formula]]
# The Problems
d维空间中最多可以塞下多少个近似正交的单位向量？
The main problem here is that *the maximum number of almost orthogonal unit vectors in Rd*. The following notes are some knowledge I feel very interesting when I was exploring the main problem. And the **simplified conclusion** of the main problem is:
- If $\epsilon =1$, $m$ can be arbitrarily large.
- If $\epsilon$ is in $[\frac{1}{2}, 1)$, $M$ is exponential in $d$. The upper bound of $m$ is in form of $c (1-\epsilon)^{-d/2}$ for some absolute constant $c$, which can be derived from volumn argument on spherical cap. We will prove it later.
- If $\epsilon$ is in $[\frac{1}{2\sqrt{d}}, \frac{1}{2}]$, $M$ is exponential in dimension $d$. The upper bound of $m$ is in form of $e^{c \epsilon^2 (\log\frac{1}{\epsilon}) d}$ for some absolute constant $c$,  following from the result of Noga Alon's Theorem 9.3 on the high rank of perturbations of the identity matrix \citep{alon2003problems}.
- If $\epsilon$ is in $[0, \frac{1}{2\sqrt{d}}]$, $M$ is polynomial in dimension $d$. The minimum of $\epsilon$ that allows $m=d+1$ is $\frac{1}{d}$ (in this case, those vectors form a regular simplex centered at the origin, which is also a equiangular tight frame).

The **whole report** can be founded here, <object data="/blog/midreportBingranLi.pdf" type="application/pdf" width="100%" height="600px">
  <p>It appears you don't have a PDF plugin for this browser.
  You can <a href="/blog/midreportBingranLi.pdf">click here to download the PDF file.</a></p>
</object>

Reference and useful links: [A cheap version of the Kabatjanskii-Levenstein bound for almost orthogonal vectors | What's new](https://terrytao.wordpress.com/2013/07/18/a-cheap-version-of-the-kabatjanskii-levenstein-bound-for-almost-orthogonal-vectors/)
[Alon's Problems and results in Extremal Combinatorics, Part I.pdf](https://web.math.princeton.edu/~nalon/PDFS/extremal1.pdf)

## (Exact) [[equiangular]] lines
from: [Yufei Zhao | MIT Mathematics](https://yufeizhao.com/)
Those questions connect to [[algebraic graph theory]]. and the set of equiangular lines is a special type of [[spherical code]], which is $\{\alpha,\alpha\}-$code.
*Equiangular*: given unit vectors $v_1,...,v_n$ in $R^{d}$ with pairwise inner product $\alpha\in(-1,1]$.
1. *How many equiangular lines can you have in $d$ dimensions? Let $N(d)$ be the maximum number of lines in $\mathbb{R}^d$ with pairwise equal angles.*(Ans: $O(d)$)
2. *Fix an angle, how many equiangular lines can you have with this given angle in $d$ dimensions, for large $d$?* (Ans: $\Theta(d)$)

## Nearly Equiangular Lines
![](/20250422085931.png)
In lecture notes of [Yufei Zhao | MIT Mathematics](https://yufeizhao.com/), there is a theorem saying **Exponentially** many approximately equiangular vectors.
It is related to [[JL lemma]], and my project [[Probability in Combinatorics|Generate approximately independent random variables]], where I consider [[Probability in Combinatorics|Tight Frame]].

We should reflect on [[deterministic and probabilistic]] behavior of [[projection]].

## Projections
tight frame can be considered as a [[projection]] of an orthonormal basis in higher dimension, see the graph below. Naturally, [[random projection]] also use some projection matrix, in probabilistic way create tight frame in lower dimension.

the question is: *how to link the three: the tight frame (unit vectors or not), the projection matrix and the Gram of the tight frame? This will give us more insight on  random projection in [[JL lemma]].*

# Tight Frame
[newbook.dvi](https://www.math.auckland.ac.nz/~waldron/Preprints/Frame-book/draft26-7.17.pdf)
It's also related to [[frame theory]]
*Tight frame*: 
*Normed/Equal-norm/normalized Tight frame*: unit vectors
*Equiangular tight frame*: a normed tight frame with inner product of pairwise vectors (i) **identical** and, (ii) **minimal** (see Welch bound and On the existence of equiangular tight frames[^1])
Characterization of *tight* frame: $\sum_i\sum_j|<f_i,f_j>|^2=\frac{1}{d}\left( \sum <f_{i},f_{i}> \right)^2$.

## 2.6 Tight frames as orthogonal projections
Every finite frame $\Phi=(f_{j})_{{j\in J}}$ is a normalized tight frame iff it is the [[projection]] of orthonormal basis for $l(J)$.
![image](/20250422085549.jpg)

## construction of tight frame from orthogonal projections
Given $P\in \mathbb{R}^{n \times n}$, we can find $V\in\mathbb{R}^{d\times n}$, $V^*V=P$.


# Welch bound
$f_{i}\in \mathbb{C}^d$ units vector. $\sum_i\sum_j|<f_i,f_j>|^2\geq \frac{n^2}{d}$
The unit vectors give equality is called Welch bound equality sequences. Further more, the functional attains minimum precisely when it's *normalized tight frame* (see [tmp-31076](https://www.math.auckland.ac.nz/~waldron/Preprints/Welch-bound/CLN-02-481.pdf)). However the **existence** of normalized tight frame for $n>d$ is not known. 

Corollary: Denote M to be the maximum *cross-correlation* of the frame.
$M \geq \sqrt{\frac{n-d}{d(n-1)}}$, is the smallest possible value for $M$ for a set of $m$ unit *equiangular* vectors in $\mathbb{R}^d$. It attains equality when the frame is *Equiangular Tight Frame* (ETF), and notice that this condition is stronger, requiring additional *equiangularity*. The **existence** of ETF in general is still open (see [equi.pdf](https://webtool.math.ucdavis.edu/~strohmer/papers/2007/equi.pdf)).

We know the maximum number of equiangular vectors.

