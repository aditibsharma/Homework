#Scraping using Beautiful Soup
# Dependencies
from bs4 import BeautifulSoup
import requests
import pandas as pd
import time
from splinter import Browser

def init_browser():
    executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
    return Browser("chrome", **executable_path, headless=False)

def scrape() :
	browser = init_browser()
    mars_data = {}

    ## NASA Mars News

    #URL of page to be scraped
    url = 'https://mars.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest'

    # Retrieve page with the requests module
    response = requests.get(url)
    # Create BeautifulSoup object; parse with 'html.parser'
    soup = BeautifulSoup(response.text, 'html.parser')

    #Printing News title and News text
    title = soup.find('div', class_='content_title')
    text = soup.find('div', class_='rollover_description_inner')

    newsTitle = title.text
    newsText = text.text

    print(newsTitle)
    print(newsText)

    ## JPL Mars Space Images - Featured Image

    url = 'https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars'
    url_base = 'https://www.jpl.nasa.gov'

    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    result = soup.find('article', class_='carousel_item').attrs

    style_prop = str(result['style'])
    trim1 = style_prop.replace("background-image:", "")
    trim2 = trim1.replace(" url('", "")
    image = trim2.replace("');", "")
    image_url = url_base + image
    print(image_url)

    executable_path = {'executable_path': '/usr/local/bin/chromedriver'}

    browser = Browser('chrome', **executable_path, headless=False)
    featured_image_url = 'https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22374_hires.jpg'
    browser.visit(featured_image_url)

    ## Mars Weather
    url = "https://twitter.com/marswxreport?lang=en"

    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    result = soup.find('div', class_="js-tweet-text-container")

    print(result)

    tweet_text = result.p.text
    print(tweet_text)

    #Scraping the table and getting HTML string 
    url = "https://space-facts.com/mars/"
    table = pd.read_html(url)
    print(table)

    df = table[0]
    df.columns = ["Parameters", "Values"]
    df.head()

    html_table = df.to_html()
    html_table

    html_table.replace('\n', '')

    #Mars Hemisperes

    url = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
    url_base = "https://astrogeology.usgs.gov"

    browser = Browser('chrome', headless=False)
    browser.visit(url)

    soup = BeautifulSoup(browser.html, 'html.parser')

    result = soup.find_all('div', class_="item")

    url_list = []

    for y in result:
        link = y.find('a')['href']
        url_list.append(link)
        
    print("Printing URLs LIST")
    print(url_list)
    print("")
    print("---------------------------------------------------------------------------------------------------------------------")
    print("Printing 'hemisphere_image_urls' Dictionary")
    print("")

    hemisphere_image_urls = []

    for x in url_list:
        url = url_base + x
            
        browser.visit(url)
        
        # Sleep script to ensure the page fully loads
    # time.sleep(5)
        
        soup = BeautifulSoup(browser.html, 'html.parser')
        
        # Grab image url
        result1 = soup.find('img', class_="wide-image")
        image = url_base + result1["src"]
        
        # Grab page title and remove "Enhanced" from string
        result2 = soup.find('h2', class_='title')
        title = result2.text
        title = title.rsplit(' ', 1)[0]
        
        mars_hemi = {"title": title, "img_url": image}
        hemisphere_image_urls.append(mars_hemi)
        
        #time.sleep(10)
        
        print(hemisphere_image_urls)
        return mars_data