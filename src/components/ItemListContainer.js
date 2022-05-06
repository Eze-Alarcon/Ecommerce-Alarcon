import Banner from './Banner'
import ItemList from './ItemList'

function ItemListContainer() {
    
    
    return (
        <>
            <Banner/>
            <div className="w-9/12 mx-auto my-16" id="content">
                <div className="flex flex-wrap -mx-1 lg:-mx-4"> 
                    <ItemList/>
                </div>
            </div>
        </>
        )
}


export default ItemListContainer
