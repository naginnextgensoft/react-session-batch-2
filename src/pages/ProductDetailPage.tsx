import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { fetchProductById } from '../redux/slices/productSlice'
import {
  ArrowLeft,
  Star,
  Tag,
  Package,
  ShieldCheck,
  Truck,
  BarChart2,
  Loader,
  AlertTriangle,
} from 'lucide-react'

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { loading, error, selectedProduct } = useAppSelector(state => state.product)

  useEffect(() => {
    if (id) dispatch(fetchProductById({ productId: Number(id) }))
  }, [id, dispatch])

  if (loading) {
    return (
      <div className="state-screen">
        <Loader size={36} className="spin" />
        <p>Loading product…</p>
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

  if (!selectedProduct) return null

  const p = selectedProduct

  return (
    <div className="detail-page">
      <div className="detail-page__back-row">
        <button className="btn-ghost" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} /> Back
        </button>
        <Link to="/products" className="btn-ghost">All Products</Link>
      </div>

      <div className="detail-card">
        <div className="detail-card__img-col">
          <img src={p.thumbnail} alt={p.title} className="detail-card__img" />
          {p.images && p.images.length > 1 && (
            <div className="detail-card__thumbs">
              {p.images.slice(0, 4).map((src, i) => (
                <img key={i} src={src} alt={`view ${i + 1}`} className="detail-card__thumb" />
              ))}
            </div>
          )}
        </div>

        <div className="detail-card__info">
          <span className="detail-card__category">
            <Package size={13} /> {p.category}
          </span>
          <h1 className="detail-card__title">{p.title}</h1>
          {p.brand && <p className="detail-card__brand">by {p.brand}</p>}

          <div className="detail-card__rating">
            {[1, 2, 3, 4, 5].map(n => (
              <Star
                key={n}
                size={16}
                fill={n <= Math.round(p.rating) ? 'currentColor' : 'none'}
              />
            ))}
            <span>{p.rating} / 5</span>
          </div>

          <p className="detail-card__price">${p.price}
            {p.discountPercentage > 0 && (
              <span className="detail-card__discount">-{p.discountPercentage}% off</span>
            )}
          </p>

          <p className="detail-card__desc">{p.description}</p>

          <div className="detail-card__meta">
            <div className="detail-meta-item">
              <Tag size={15} />
              <span>SKU: {p.sku}</span>
            </div>
            <div className="detail-meta-item">
              <BarChart2 size={15} />
              <span>Stock: {p.stock} units</span>
            </div>
            <div className="detail-meta-item">
              <Truck size={15} />
              <span>{p.shippingInformation}</span>
            </div>
            <div className="detail-meta-item">
              <ShieldCheck size={15} />
              <span>{p.warrantyInformation}</span>
            </div>
          </div>

          <div className="detail-card__actions">
            <button className="btn-primary">Add to Cart</button>
            <button className="btn-outline">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
