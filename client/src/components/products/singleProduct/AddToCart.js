import React from 'react'
import { Button } from 'react-bootstrap'
import { RiShoppingCartFill } from 'react-icons/ri';

export default function AddToCart({item, addItem}) {
    return (
        <Button
            style={{ marginTop: '5px' }}
            variant='outline-success'
            onClick={() => addItem(item)}>
            <RiShoppingCartFill
              style={{ marginRight: '3px', marginBottom: '3px' }}
            />
            Add to Cart
          </Button>
    )
}
