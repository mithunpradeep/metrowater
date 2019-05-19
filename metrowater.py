import sys
import time
from selenium import webdriver

try:
    phoneNumber = sys.argv[1]
    tankerSize = sys.argv[2]
    options = webdriver.ChromeOptions()
    options.add_argument('window-size=800x841')
    options.add_argument('headless')
    driver = webdriver.Chrome(executable_path='/usr/local/bin/chromedriver',options=options)
    driver.get('https://www.chennaimetrowater.in/registrationlanding.html')

    # Login Page
    phoneNumberElem = driver.find_element_by_id('mobile_no_boking')
    phoneNumberSearchElem = driver.find_element_by_id('search_1')
    phoneNumberElem.send_keys(phoneNumber)
    phoneNumberSearchElem.click()
    time.sleep(2)
    # Booking Page
    tankerSizeElem = driver.find_elements_by_xpath('//input[@value="'+tankerSize+'"]')
    tankerSizeRadioInput = tankerSizeElem[0]
    tankerSizeRadioInput.click()
    bookTankerElem = driver.find_element_by_id('book')
    bookTankerElem.click()
    driver.quit()
    print(str('Booked'))
    sys.stdout.flush()
except Exception as e:
    driver.quit()
    print(str('Booking Failed'))
    sys.stdout.flush()