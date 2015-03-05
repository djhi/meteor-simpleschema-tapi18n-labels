Meteor SimpleSchema Tapi18n labels
=========================

Allows to use [Tapi18n](https://github.com/TAPevents/tap-i18n) for
[simple-schema](https://github.com/aldeed/meteor-simple-schema) labels

# Installation
```
meteor add gildaspk:simpleschema-tapi18n-labels
```

# Usage
Simply use the `i18nLabel` property on your schema:
```
var mySchema = new SimpleSchema({
  myProperty: {
    type: String,
    i18nLabel: 'myPropertyKey'
  }
});
```

Refer to the [Tapi18n](https://github.com/TAPevents/tap-i18n) documentation to
learn how to specify translations, etc.
