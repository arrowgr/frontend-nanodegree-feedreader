/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

         // Test to ensures that the allFeeds variable is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         //Test to ensures that each feed in the allFeeds  has a url and url is not empty
         it("URL is not empty", function() {
          allFeeds.forEach(function(feed){
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         //Test to ensures that each feed in the allFeeds  has a name and name is not empty
         it("Name is not empty", function() {
           allFeeds.forEach(function(feed){
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function() {
      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       //Test to entries that the menu hidden by default
       it("the menu element hidden by default", function(){
         expect($('body').hasClass('menu-hidden')).toBeTruthy();
       });
       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        // Test to ensure that the menu appear and hidden.
       it('the menu changes visibility', function(){
         // Trigger event on menu
         $('.menu-icon-link').trigger('click');
			   expect($('body').hasClass('menu-hidden')).toBeFalsy();
         // Trigger event on menu
         $('.menu-icon-link').trigger('click');
			   expect($('body').hasClass('menu-hidden')).toBeTruthy();

       });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {
      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test wil require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */

       // Call loadFeed() for initial entries
       beforeEach(function(done) {
         loadFeed(0, done);
       });

       // Test to ensure there is at least a single .entry element within the .feed container.
       it('has been loaded', function(done) {
         expect($('.feed').children().length).toBeGreaterThan(0);
         done();
       });
     });


  /* TODO: Write a new test suite named "New Feed Selection" */
      describe("New Feed Selection", function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         // get current content to the variable
         var text = $('.feed').find('p').text();
         //load new content
         beforeEach(function(done) {
            text;
            loadFeed(1, done);
          });
         //Test ensure that content changed when new feed is loaded
         it('a new feed is loaded', function(done) {
           expect($('.feed').find('p').text()).not.toBe(text);
   				 done();
         });

         //Return to initial feed 
			   afterEach(function(done){
				   loadFeed(0,done);
			   });
      });

}());
