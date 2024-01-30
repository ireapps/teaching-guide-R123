# teaching-guide-R123

*A teaching guide for the IRE/NICAR conference classes introducing R.*

Below you'll find objectives and sample scripts for each hour-long session. The data for these scripts is in the `data` folder. 

## R 1: Intro to R and RStudio

**Description**: Jump into data analysis with R, the powerful open-source programming language. In this class we’ll cover R fundamentals and learn our way around the RStudio interface for using R.

*This session is good for: People with a basic understanding of data analysis who are ready to go beyond spreadsheets.*

### Objectives

At the end of this session participants should be able to do the following: 

- Navigate the different panes of RStudio and use an R Notebook file (.Rmd)
- Assign values to variables
- Understand basic data types and structures (strings, numbers, vectors)
- Import data with `read_csv()`
- Use the tidyverse pipe `%>%`
- Pipe the dataset into basic functions: `arrange()`, `filter()`, `summarise()`, `group_by()` and `count()`
- Understand how data moves from one function to the next using `%>%`

### Libraries

- tidyverse
- readxl
- babynames

### Scripts

- R1-1-intro-to-r-and-rstudio.Rmd
- R1-2-analysis-of-salaries-R1.Rmd
- R1-3-analysis-of-babynames-R1.Rmd

## R 2: Data analysis and plotting

**Description**: We'll use the tidyverse packages dplyr and ggplot2, learning how to sort, filter, group, summarize, join, and visualize to identify trends in your data. If you want to combine SQL-like analysis and charting in a single pipeline, this session is for you.

*This session is good for: People who have worked with data operations in SQL or Excel and would like to do the same in R and have some experience working with RStudio.*

### Objectives

At the end of this session participants should be able to do the following:

- Review basic analysis functions - `arrange()`, `filter()`, `select()`, `group_by()`, `summarise()`, `count()`
- Introduce joins, using at least `left_join()` and `inner_join()`
- Introduce ggplot2 to make basic plots
- Refer to the ggplot2 documentation to determine what geoms they can use in certain situations (one discrete variable, two continuous variables, etc)

### Libraries

- tidyverse
- lubridate
- forcats
- readxl
- scales

### Sample scripts

- R1-1-dplyr-examples.Rmd
- R2-2-visualizations.Rmd
- R2-3-ggplot-examples.Rmd


## R 3: Gathering and cleaning data

**Description**: Learn how to import a wide variety of files in R including spreadsheets,  files on the web and HTML tables, and transform the results into usable data. This session will also focus on how to clean and structure the data you've gathered in preparation for analysis using tidyverse packages.\
*This session is good for: People who have some experience using R and the Tidyverse.*

### Objectives

At the end of this session participants should be able to do the following:

- Import both local and remote flat files
- import Excel and Google Sheets data
- Import a basic web table, using `read_html() %>% html_table()` from rvest
- `mutate()`, string functions, lubridate functions, `remove_empty()` from janitor, `distinct()`

### Libraries

- tidyverse
- readxl
- googlesheets4
- rvest
- lubridate
- RSocrata

### Scripts

- importing-flat-files-R3.Rmd
- cleaning-examples-R3.Rmd
- data-cleaning-R3.Rmd
- getting-and-cleaning-data-R3.Rmd
 
