export const dynamic = "force-dynamic";

const currency = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" });

async function getProducts() {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) return null;
  try {
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/products`, {
      cache: "no-store",
      signal: AbortSignal.timeout(8000)
    });
    if (!response.ok) return null;
    const data = await response.json();
    return Array.isArray(data.products) ? data.products : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const products = await getProducts();

  return <>
    <div className="announcement">Một chiếc bánh ngon, một ngày dịu dàng hơn ♡</div>
    <header className="header wrap">
      <a className="brand" href="/" aria-label="Mơ — Trang chủ">mơ<span>°</span></a>
      <nav aria-label="Điều hướng chính">
        <a href="#menu">Thực đơn</a>
        <a href="#about">Về Mơ</a>
      </nav>
      <a className="header-note" href="#menu">BẾP NHỎ · NIỀM VUI TO</a>
    </header>
    <main>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">MỘT CHÚT NGỌT NGÀO / EVERYDAY GOODNESS</p>
          <h1>Ăn ngon<br />một chút, <em>vui hơn.</em></h1>
          <p>Bánh thơm mới ra lò, ly nước mát lành và những món ngon làm từ nguyên liệu tử tế — dành cho ngày thường cũng đáng yêu.</p>
          <a className="button" href="#menu">Ghé xem thực đơn <span aria-hidden="true">↗</span></a>
          <p className="hero-caption">BÁNH TƯƠI · CÀ PHÊ · MÓN NHỎ</p>
        </div>
        <div className="hero-art">
          <div className="hero-sun" />
          <img src="/images/croissant.svg" alt="Bánh croissant bơ vàng thơm mới ra lò" width="400" height="400" />
          <span className="art-label">Nướng mới mỗi ngày.</span>
          <span className="art-number">LÀM BẰNG CẢ TẤM LÒNG</span>
        </div>
      </section>
      <section className="catalog wrap" id="menu">
        <div className="section-heading">
          <div><p className="eyebrow">MÓN ĐƯỢC YÊU THÍCH</p><h2>Hôm nay mình ăn gì?</h2></div>
          <span>{products ? `${products.length} món ngon` : "Menu nhà Mơ"}</span>
        </div>
        {products === null ? <div className="notice" role="status">Mơ chưa lấy được thực đơn. Bạn thử tải lại sau một chút nhé!</div> : products.length === 0 ? <p className="notice">Mơ đang chuẩn bị thêm món ngon. Quay lại sớm nhé!</p> : <div className="grid">{products.map(product => <article className="product" key={product.id}>
          <div className={`product-image ${product.color}`}>
            <img src={`/images/${product.icon}.svg`} alt={`Minh họa ${product.name}`} width="320" height="260" loading="lazy" />
            <span className="product-code">MƠ / {product.id.slice(-2)}</span>
          </div>
          <p className="category">{product.category}</p>
          <div className="product-title"><h3>{product.name}</h3><span>{currency.format(product.price)}</span></div>
          <p className="description">{product.description}</p>
        </article>)}</div>}
      </section>
      <section className="about wrap" id="about">
        <p className="eyebrow">BẾP NHỎ CỦA MƠ</p>
        <h2>Ngon lành từ căn bếp,<br />ấm áp đến tận lòng.</h2>
        <p>Mơ tin những niềm vui giản dị thường bắt đầu từ một món ngon. Đây là cửa hàng bánh và café mô phỏng cho bài tập SEO & Deployment; thực đơn, giá bán và hình minh họa là dữ liệu mẫu.</p>
      </section>
    </main>
    <footer className="wrap">
      <a className="brand" href="/" aria-label="Mơ — Trang chủ">mơ<span>°</span></a>
      <p>Bếp nhỏ · Những điều ngon lành mỗi ngày</p>
      <a href="#menu">Xem thực đơn ↑</a>
    </footer>
  </>;
}
