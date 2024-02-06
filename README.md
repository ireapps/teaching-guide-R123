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
- Use the tidyverse pipe `%>%` or `|>`
- Pipe data into basic functions: `arrange()`, `filter()`, `summarise()`, `group_by()` and `count()`

### Libraries

- tidyverse
- readxl
- babynames

### Scripts

- R1-1-intro-to-r-and-rstudio.Rmd
- R1-2-analysis-of-salaries.Rmd
- R1-3-analysis-of-mentions.Rmd
- R1-xtra-analysis-of-babynames.Rmd

## R 2: Data analysis and plotting

**Description**: We'll use the tidyverse packages dplyr and ggplot2, learning how to sort, filter, group, summarize, join, and visualize to identify trends in your data. If you want to combine SQL-like analysis and charting in a single pipeline, this session is for you.

*This session is good for: People who have worked with data operations in SQL or Excel and would like to do the same in R and have some experience working with RStudio.*

### Objectives

At the end of this session participants should be able to do the following:

- Apply basic analysis functions - `select()`,`filter()`, `group_by()`, `summarise()`, `arrange()`, `count()`
- Recognize mutating joins such as `left_join()` and `inner_join()`
- Recognize the use of ggplot2 to make basic plots
- Refer to the ggplot2 documentation to determine what geoms they can use in certain situations (one discrete variable, two continuous variables, etc)

### Libraries

- tidyverse
- janitor
- babynames
- readxl

### Sample scripts

- R2-1-analysis-weather.Rmd
- R2-2-visualizations.Rmd
- R2-3-analysis-denied.Rmd
- R1-xtra-dplyr-examples.Rmd
- R2-xtra-ggplot-examples.Rmd

## R 3: Gathering and cleaning data

**Description**: Learn how to import a wide variety of files in R including spreadsheets,  files on the web and HTML tables, and transform the results into usable data. This session will also focus on how to clean and structure the data you've gathered in preparation for analysis using tidyverse packages.\
*This session is good for: People who have some experience using R and the Tidyverse.*

### Objectives

At the end of this session participants should be able to do the following:

- import Excel and Google Sheets data
- Import a basic web table, using `read_html() %>% html_table()` from rvest
- `mutate()`, string functions, lubridate functions, `remove_empty()` from janitor, `distinct()`
- Import both local and remote flat files

### Libraries

- tidyverse
- readxl
- googlesheets4
- rvest
- lubridate
- here
- campfin
- RSocrata

### Scripts

- R1-1-cleaning-evictions.Rmd
- R3-xtra-cleaning-examples-R3.Rmd
- R3-xtra-data-cleaning-R3.Rmd
- R3-xtra-getting-and-cleaning-data-R3.Rmd
- R3-xtra-importing-flat-files-R3.Rmd
 
