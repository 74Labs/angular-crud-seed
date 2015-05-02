# Angular CRUD Seed
AngularJS CRUD simple seed. Service, controller, routing and templates included.

##Quick start

* Clone this repository into your application components directory: *app/components/*`ResourceAPIPath`
```bash
git clone https://github.com/SeventyFourLaboratories/angular-crud-seed.git app/components/ResourceAPIPath
```
* Replace placeholders with your own values

* Include scripts into your application
```html
<script type="text/javascript" src="app/components/ResourceAPIPath/services.js"></script>
<script type="text/javascript" src="app/components/ResourceAPIPath/controllers.js"></script>
<script type="text/javascript" src="app/components/ResourceAPIPath/routing.js"></script>
```

##Content

Seed contains:
* TBD
* names and variables being placeholders for your own application naming:

Placeholder | Description
------------|-------------
`ResourceName` |  
`ResourceNameLowerCase` | Module names, template paths, routing states and route URLs 
`ResourceNameCamelCase` | Service names, controller names 
`AppNameLowerCase` |  
`AppNameCamelCase` | Service names, controller names 
`ResourceAPIPath` | Service Restangular paths 

####Renaming Example

Configuration:

Placeholder | Value
------------|--------------
`ResourceName` | My Resource
`ResourceNameLowerCase` | myresource
`ResourceNameCamelCase` | MyResource
`AppNameLowerCase` | myapplication
`AppNameCamelCase` | MyApplication
`ResourceAPIPath` | myresources

#####Service
Module name: `myapplication.myresource.services`

Service name: `MyApplicationMyResourceService`

#####Controller
TBD

#####Routing
TBD
