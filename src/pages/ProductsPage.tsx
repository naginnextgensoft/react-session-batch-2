import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { fetchProductAction } from '../redux/slices/productSlice'
import type { IProduct } from '../interface/product.interface'
import { ShoppingCart, Star, ArrowLeft, Package, AlertTriangle, Loader } from 'lucide-react'

function ProductsPage() {
  const dispatch = useAppDispatch()
  const { loading, error, products } = useAppSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchProductAction())
  }, [dispatch])

  if (loading) {
    return (
      <div className="state-screen">
        <Loader size={36} className="spin" />
        <p>Loading products…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="state-screen state-screen--error">
        <AlertTriangle size={36} />
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="products-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Products</h1>
          <p className="page-subtitle">{products.length} items available</p>
        </div>
        <Link to="/dashboard" className="btn-ghost">
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>
      </div>

      <div className="products-grid">
        {products.map((product: IProduct) => (
          <Link key={product.id} to={`/products/${product.id}`} className="product-card">
            <div className="product-card__img-wrap">
              <img src={product.thumbnail} alt={product.title} className="product-card__img" />
              <span className="product-card__badge">
                <Package size={12} /> {product.category}
              </span>
            </div>
            <div className="product-card__body">
              <h3 className="product-card__title">{product.title}</h3>
              <p className="product-card__desc">{product.description}</p>
              <div className="product-card__footer">
                <span className="product-card__price">${product.price}</span>
                <span className="product-card__rating">
                  <Star size={13} fill="currentColor" />
                  {product.rating}
                </span>
              </div>
              <div className="product-card__cta">
                <ShoppingCart size={14} />
                View Details
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
