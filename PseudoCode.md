


Submit a search query from the application to request data and receive a response from the Library of Congress.

INDEX.HTML:
        UI: Text input field to capture user's search term(s)
            Option select drop-down box populated with LOC format Options
            Search button
            
            * Must capture what user enters into the input text field
            * Need to capture the option that they chose
            * Capture the "cllick" event on th submit button 
            
            EVENT LISTENER:  On the click, when the user has submitted good data, we need to:
                capture the text info in the input field
                capture option they chose in select box
            
            Check to make sure they selected an option....
                If YES, fetch LOC using that option's parameter
                If NO, fetch LOC *all (general format)
            
            Fetch using above input^^^ from LOC.

            Display Results:
                Redirect the user to a search results page using location.replace() with these input values included in the URL as query parameters. 
                        Search with No Format: search URL: /search-results.html?q=dogs&format=
                        Search with Format: /search-results.html?q=dogs&format=photos

 

SEARCH-RESULTS.HTML:
    On page load, if there are query parameters, immediately parse them and use them in a request URL to fetch data from the Library of Congress API.
    see all of the results of my search displayed on a separate page (search-results.html)
    conduct additional searches from the results page as well (search-results.html)
    Check to see whether we have a valid format parameter. 
        If YES, search using that specific format endpoint
        If NO, search using the search endpoint
    response from the API request will then be displayed on the page

    The same form from the homepage should be here as well. Instead of redirecting a user to another page, however, it will perform a search right on the page and display the new results.