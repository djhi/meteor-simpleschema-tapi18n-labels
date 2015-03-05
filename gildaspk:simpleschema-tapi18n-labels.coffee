SimpleSchema.extendOptions
  i18nLabel: Match.Optional String

SimpleSchema.prototype.originalLabel = SimpleSchema.prototype.label

SimpleSchema.prototype.label = (key) ->
  result = null

  if key is null then return this.originalLabel()

  fieldDefinition = this.getDefinition key

  if fieldDefinition and fieldDefinition.i18nLabel
    language = SimpleSchemaTapi18n.getLanguage()
    result = TAPi18n.__ fieldDefinition.i18nLabel, {}, language
  else
    result = this.originalLabel key

  result

defaultLanguage = Package["tap:i18n"].TAPi18n.translations[0]

SimpleSchemaTapi18n =
  setDefaultLanguage: (tag) ->
    defaultLanguage = tag
    return

  getLanguage: ->
    # on server, we must specify the language
    if Meteor.isServer
      user = Meteor.user?()
      language = user?.profile?.language or defaultLanguage

    # on client, Tapi18n will use the current language so we leave it
    # unspecified
    language
