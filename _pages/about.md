---
layout: about
title: About
permalink: /
subtitle: " <a href='https://www.uber.com/us/en/ai-solutions/resources/gen-ai/'>Uber Technologies</a>, <a href='https://engineering.purdue.edu/ECE'>Purdue University</a>, <a href='https://engineering.purdue.edu/NRL'>Nano(Neuro) Electronics Laboratory</a>."

profile:
  align: right
  image: Profile_pic.jpg
  image_circular: false # crops the image to make it circular

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts

scholar:
  sort_by: year
  order: descending
---

**Data Efficiency · Efficient Fine-tuning · Large Language Models**

I am currently working as a Machine Learning Engineer at Uber Technologies. Broadly, I’m interested in techniques that make foundation models, LLMs, vision models, and multimodal systems, more compact, accurate, and deployable in real applications.

I received my Ph.D. in Electrical and Computer Engineering at Purdue University, working with [Professor Kaushik Roy](https://scholar.google.com/citations?user=to4P8KgAAAAJ&hl=en). I also received my M.S. in Electrical and Computer Engineering from Purdue University  and my B.E. in Electronics and Communications from PES Institute of Technology, Bangalore, India.

My doctoral dissertation, "**Exploring Data Efficiency for Deep Learning Systems**" looked at how to make modern deep learning, especially large language and vision models, more practical and scalable. I worked on methods that identify which data actually matters for training, so that we can fine-tune and deploy large models with less compute and without sacrificing performance. This has included:
- ['TRIM: Token-wise Attention-Derived Saliency for Data-Efficient Instruction Tuning'](https://arxiv.org/abs/2510.07118) - a forward-only, attention-based approach for selecting instruction-tuning data for LLMs, accepted for publication at ICML 2026.
- ['Coresets from Trajectories: Selecting Data via Correlation of Loss Differences'](https://openreview.net/forum?id=QY0pbZTWJ9) - a gradient-free coreset method for large-scale vision training, accepted at TMLR.
- ['TOFU: Federated Learning with Data and Communication Efficiency'](https://ieeexplore.ieee.org/abstract/document/10504799) - improving data and communication efficiency in federated learning, published in IEEE Access.
- ['DOTIE: Energy-Efficient Object Detection Using Event Cameras'](https://ieeexplore.ieee.org/abstract/document/10161164) - event-based object detection with spiking neural networks, demonstrated at the 2023 IEEE International Conference on Robotics and Automation (ICRA) and [CVPR workshops](https://openaccess.thecvf.com/content/CVPR2023W/EventVision/html/Roy_Live_Demonstration_Real-Time_Event-Based_Speed_Detection_Using_Spiking_Neural_Networks_CVPRW_2023_paper.html).

Across these projects, the common thread was data efficiency for large models: selecting informative subsets, scaling training under real-world constraints, and making models usable in settings like federated learning, robotics, and resource-limited hardware. 

