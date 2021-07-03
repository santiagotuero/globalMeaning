This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# The assignment

Implement all or some of the following features in the order of your preference.

* Populate the list with data from `Service.getTenants`.
* Ability to filter the list using the tabs above the table
* Ability to sort the list by clicking on the table column headers
* Ability to add a tenant to the list using the form below the table and using `Service.addTenant`. Ideally the form is
 hidden by default and is displayed when clicking on the Add Tenant button.
  * Validate tenant.leaseEndDate is in the future
  * Validate tenant.name length is less than or equal to than 25 characters
* Ability to delete a tenant by clicking on Delete.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
