---
title: "Verify Before You Fetch: Reliable KV Cache Compression for LLM Inference"
authors:
  - "Devanshu Jha"
  - "Gaurav Kumar"
  - "Agniva Chowdhury"
  - "Kumar Krishna Agrawal"
  - "Aditya Desai"
venue: "arXiv preprint"
year: 2026
abstract: "Long-context applications, long-lived agents, and multi-agent systems require large language models (LLMs) to process and retain extensive information. In these settings, the KV cache can exceed GPU high-bandwidth memory (HBM) capacity, necessitating offloading to host memory, where CPU-to-GPU transfers can dominate inference latency. While KV cache compression can reduce data movement, query-agnostic compression that guarantees accurate attention for arbitrary queries is extremely challenging, if not impossible. We introduce VerKV, a hybrid approach that provides (ε, δ) guarantees for approximating attention on any given query."
pdfUrl: https://arxiv.org/abs/2611.11319
codeUrl: https://github.com/epsilon-prime/verifiedKV
projects: []
demos: []
posts: []
---
