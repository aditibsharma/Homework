**Option 1: PyBank**

In this challenge, you are tasked with creating a Python script for
analyzing the financial records of your company. You will be given two
sets of revenue data (budget\_data\_1.csv and budget\_data\_2.csv). Each
dataset is composed of two columns: Date and Revenue. (Thankfully, your
company has rather lax standards for accounting so the records are
simple.)

Your task is to create a Python script that analyzes the records to
calculate each of the following:

-   The total number of months included in the dataset

-   The total amount of revenue gained over the entire period

-   The average change in revenue between months over the entire period

-   The greatest increase in revenue (date and amount) over the entire
    period

-   The greatest decrease in revenue (date and amount) over the entire
    period

As an example, your analysis should look similar to the one below:

Financial Analysis

----------------------------

Total Months: 25

Total Revenue: $1241412

Average Revenue Change: $216825

Greatest Increase in Revenue: Sep-16 ($815531)

Greatest Decrease in Revenue: Aug-12 ($-652794)

Your final script must be able to handle any such similarly structured
dataset in the future (your boss is going to give you more of these --
so your script has to work for the ones to come). In addition, your
final script should both print the analysis to the terminal and export a
text file with the results.

**Option 4: PyParagraph**

In this challenge, you get to play the role of chief linguist at a local
learning academy. As chief linguist, you are responsible for assessing
the complexity of various passages of writing, ranging from the
sophomoric Twilight novel to the nauseatingly high-minded research
article. Having read so many passages, you've since come up with a
fairly simple set of metrics for assessing complexity.

Your task is to create a Python script to automate the analysis of any
such passage using these metrics. Your script will need to do the
following:

-   Import a text file filled with a paragraph of your choosing.

-   Assess the passage for each of the following:

    -   Approximate word count

    -   Approximate sentence count

    -   Approximate letter count (per word)

    -   Average sentence length (in words)

-   As an example, this passage:

“Adam Wayne, the conqueror, with his face flung back and his mane like a
lion's, stood with his great sword point upwards, the red raiment of his
office flapping around him like the red wings of an archangel. And the
King saw, he knew not how, something new and overwhelming. The great
green trees and the great red robes swung together in the wind. The
preposterous masquerade, born of his own mockery, towered over him and
embraced the world. This was the normal, this was sanity, this was
nature, and he himself, with his rationality, and his detachment and his
black frock-coat, he was the exception and the accident - a blot of
black upon a world of crimson and gold.”

...would yield these results:

Paragraph Analysis

-----------------

Approximate Word Count: 122

Approximate Sentence Count: 5

Average Letter Count: 4.56557377049

Average Sentence Length: 24.4

-   **Special Hint:** You may find this code snippet helpful when
    determining sentence length (look into [regular
    expressions](https://en.wikipedia.org/wiki/Regular_expression) if
    interested in learning more):

import re

re.split("(?&lt;=\[.!?\]) +", paragraph)
