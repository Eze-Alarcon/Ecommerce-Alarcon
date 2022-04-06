import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@material-ui/core';


function CartWidget() {
    return (
        <>
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon/>
            </Badge>
        </>
    )
}

export { CartWidget }