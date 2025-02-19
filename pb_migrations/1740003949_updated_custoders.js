/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qabqpp9iaxsm5o8")

  collection.name = "custorders"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_GQvpO0Y` ON `custorders` (`order_id`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qabqpp9iaxsm5o8")

  collection.name = "custoders"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_GQvpO0Y` ON `custoders` (`order_id`)"
  ]

  return dao.saveCollection(collection)
})
