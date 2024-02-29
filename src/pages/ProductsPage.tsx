import useProducts from '../hooks/products'
import Error from '../components/Error'
import Modal from '../components/Modal'
import CreateProduct from '../components/CreateProduct'
import { useContext } from 'react'
import { IProduct } from '../models'
import { ModalContext } from '../context/ModalContext'
import Loader from '../components/Loader'
import Product from '../components/Product'

export default function ProductsPage() {
  const { products, error, loading, addProduct } = useProducts()
  const { modal, open, close } = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}

      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
      {modal && (
        <Modal
          title="Create new product"
          onClose={close}
        >
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 px-2 rounded-full bg-red-700 text-white text-2xl"
        onClick={open}
      >
        +
      </button>
    </div>
  )
}
