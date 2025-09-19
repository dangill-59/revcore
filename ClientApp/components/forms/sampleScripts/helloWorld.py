#test script to demo looping all documents
logger.Info("Lookup Started")

for doc in scriptInput:
  if doc.indexes.tom is None:
  	continue
  logger.Info("Looking for name " + str(doc.indexes.tom) )
  doc.indexes.data = "updqated" + str(doc.indexes.tom)

logger.Info("Lookup Completed")
