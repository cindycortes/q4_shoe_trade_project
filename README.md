## q4_shoe_trade_project


### Description:
Sell Your Sole is a person-to-person shoe-selling/collecting platform. Users can:
 * add a shoe they already own to their collection
 * list a shoe for sale with a price of their choosing
 * search for and purchase shoes from others
 * remove a shoe from their collection (without selling)
 
### Routes
```
GET /shoes
```
List all shoe types  
  
  
```
POST /shoes
```
Add a new shoe to the dataset  
  
  
```
PATCH /shoes/:id
```
Post a shoe for sale  
  
    
      
```
PATCH /shoes/:id/purchase
```
Buy a shoe  
  
    

```
DELETE /shoes/:id
```
Remove a shoe from your collection
