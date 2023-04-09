# Modeling individual differences in children's information integration during pragmatic word learning

------------------------------------------------------------------------

> Project repository with experimental procedures, data files and analysis scripts associated with the studies.

------------------------------------------------------------------------

## Paper

Bohn, M., Schmidt, L. S., Schulze, C., Frank, M. C., & Tessler, M. H. (2022). [Modeling individual differences in children's information integration during pragmatic word learning](https://direct.mit.edu/opmi/article/doi/10.1162/opmi_a_00069/114069/Modeling-Individual-Differences-in-Children-s). *Open Mind*, 6, 311–326.

## Structure

```
.
├── analysis
│   └── model_comparison.Rmd    <-- code to run model comparisons reported in the paper
├── data                        <-- combined data file
├── documentation               
├── experiments
|   ├── ex1_me.html             <-- double click to run Part 1 mutual exclusivity task
|   ├── ex2_novel.html          <-- .. run Part 1 discourse novelty task
│   └── ex3_combination.html    <-- .. run Part 2 combination task + word comprehension task
└── model  
|   ├── spin-within_model_comparison.wppl             <-- group-level model comparison
|   ├── spin-within_model_comparison_individual.wppl  <-- individual-level model comparison
│   └── spin-within_model_prediction.wppl             <-- model predictions
└── paper
    └── spin-within_manuscript.Rmd          <-- manuscript file 
```
