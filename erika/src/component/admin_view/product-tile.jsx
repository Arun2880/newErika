import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";




function AdminProductTile({product, setFormData, setopenCreateProductDialog, setCurrentEditedId,
  handleDelete
}){


  
  return(
    <Card className="w-full max-w-sm mx-auto ">
      <div >
        <div className="relative">
          <img src={product?.image}
          alt={product?.title}
          className="w-full h-[250px] object-cover object-center rounded-t-lg" />

        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span className={`${product?.salePrice>0 ? 'line-through': ''} text-lg font-semibold text-primary`}>
              ${product?.price}
            </span>
            {
              product?.salePrice>0 ?<span className="text-lg font-bold " >
              ${product?.salePrice}
            </span>:null

            }

            
          </div>

        </CardContent>
        <CardFooter className=" flex justify-between items-center">
          <Button className="bg-black text-white" onClick={()=>{
            setopenCreateProductDialog(true) 
            setCurrentEditedId(product?._id)
            
            setFormData(product)
          }}>
            Edit</Button> 

          <Button className=" bg-black text-white" onClick={()=> handleDelete(product?._id)}>
            Delete
          </Button>

        </CardFooter>

      </div>
    </Card>
  )
}


export default AdminProductTile;