import SHOP_DATA from '../../shop_data'
import { addCollectionAndDocuments } from './firebase.utils'


const seeding = async () => {
    console.log('we are here')
    let seeding = await addCollectionAndDocuments('categories', SHOP_DATA)
}

// seeding()