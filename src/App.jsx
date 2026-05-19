import heroImage from './assets/ss111.png'
import taxiIcon from './assets/taxi-icon.svg'
import xe1 from './assets/huynhdai.jpg'
import xe2 from './assets/mazda2.jpg'
import xe3 from './assets/kia.jpg'
import xe4 from './assets/todota.jpg'
import xe5 from './assets/toco.jpg'

function SectionTitle({ title, description }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function FeatureCard({ title, description, icon }) {
  return (
    <article className="feature-card">
      {icon && (
        <div className="feature-icon">
          <img src={icon} alt="Icon" />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="page-shell topbar-inner">
          <div className="brand">
            <img src={taxiIcon} alt="Taxi logo" />
            TAXI HƯNG YÊN
          </div>
          <nav>
            <ul className="topnav-links">
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#pricing">Bảng giá</a></li>
              <li><a href="#services">Dịch vụ nổi bật</a></li>
              <li><a href="#about">Giới thiệu</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.55), rgba(15,23,42,0.55)), url(${heroImage})` }}>
        <div className="page-shell hero-inner">
          <div className="hero-content">
            
          </div>
        </div>
      </section>

      <main className="page-shell">
        <section className="pricing" id="pricing">
          <SectionTitle title="Bảng giá tiêu biểu" description="Giá cước rõ ràng cho hành trình nội tỉnh, sân bay và liên tỉnh." />
          <div className="pricing-grid">
            <article className="pricing-card">
              <h3>Nội tỉnh</h3>
              <p className="price">Từ 100.000đ</p>
              <p>Đi lại trong Hưng Yên với xe sạch, tài xế thân thiện.</p>
            </article>
            <article className="pricing-card">
              <h3>Sân bay / ga</h3>
              <p className="price">Từ 150.000đ</p>
              <p>Đưa đón sân bay, ga tàu đúng giờ và an toàn.</p>
            </article>
            <article className="pricing-card">
              <h3>Liên tỉnh</h3>
              <p className="price">Từ 200.000đ</p>
              <p>Chuyến dài thoải mái, chi phí trọn gói, minh bạch.</p>
            </article>
          </div>
        </section>

        <section className="features" id="services">
          <SectionTitle
            title="Dịch vụ nổi bật"
            description="Luôn có xe sẵn, giá cạnh tranh và phục vụ tận tâm cho mọi tuyến đường."
          />
          <div className="feature-grid">
            <FeatureCard
              title="Tiết kiệm"
              description="Giá cước hợp lý, minh bạch và nhiều ưu đãi cho khách hàng thân thiết."
            />
            <FeatureCard
              title="Phục vụ 24/7"
              description="Đặt xe mọi lúc, không lo giờ giấc. Luôn có tổng đài sẵn sàng hỗ trợ."
            />
            <FeatureCard
              title="Nhanh chóng"
              description="Xe đến nhanh trong vòng 5-10 phút tại khu vực Hưng Yên."
            />
            <FeatureCard
              title="Chất lượng"
              description="Xe đời mới, sạch sẽ, lái xe lịch sự và an toàn."
            />
          </div>
        </section>

        <section className="service-overview" id="about">
          <div className="service-text">
            <SectionTitle
              title="Giới thiệu Taxi Hưng Yên"
              description="Chúng tôi phục vụ khách hàng cá nhân và doanh nghiệp với đội xe đa dạng 4 chỗ, 7 chỗ, 16 chỗ."
            />
            <p>
              Với phương châm “Khách hàng là thượng đế”, Taxi Hưng Yên luôn cải tiến dịch vụ, đầu tư xe mới và đào tạo tài xế thân thiện. Chúng tôi có xe sân bay, ga tàu, bến xe và xe đi liên tỉnh.
            </p>
            <ul>
              <li>Xe đời 2019-2024</li>
              <li>Cung cấp nước suối, khăn lạnh</li>
              <li>Giá cước minh bạch, không phát sinh</li>
            </ul>
          </div>
          <div className="service-highlights">
            <div className="highlight-card">
              <h3>Khu vực chạy taxi</h3>
              <p>Hưng Yên, Hà Nội, Vĩnh Phúc, Ninh Bình, Hải Dương, Thanh Hóa và nhiều tuyến liên tỉnh.</p>
            </div>
            <div className="highlight-card">
              <h3>Xe đa dạng</h3>
              <p>5 chỗ, 7 chỗ, 16 chỗ cho gia đình, công ty và du lịch.</p>
            </div>
          </div>
        </section>

        <section className="why-choose">
          <SectionTitle
            title="Vì sao nên chọn Taxi Hưng Yên"
            description="Chúng tôi cung cấp dịch vụ chuyên nghiệp, nhanh chóng và giá cả minh bạch cho mọi hành trình."
          />
          <div className="why-grid">
            <FeatureCard
              title="An toàn và sạch sẽ"
              description="Xe luôn được khử khuẩn, sạch sẽ và tài xế tuân thủ quy tắc an toàn."
            />
            <FeatureCard
              title="Đón đúng giờ"
              description="Đặt xe trước hoặc ngay lập tức, luôn có xe đúng giờ và phục vụ chu đáo."
            />
            <FeatureCard
              title="Hỗ trợ khách hàng"
              description="Tổng đài sẵn sàng hỗ trợ 24/7 và giải đáp mọi thắc mắc nhanh chóng."
            />
          </div>
        </section>

        <section className="cars" id="cars">
          <SectionTitle title="Các loại xe" description="Một số dòng xe tiêu biểu của chúng tôi." />
          <div className="cars-grid">
            <div className="car-card">
              <div className="car-card-icon">
                <img src={xe1} alt="Hyundai" />
              </div>
              <h3>Xe 4 chỗ</h3>
              <p>Xe 4 chỗ tiện nghi, phù hợp nội tỉnh và đón sân bay.</p>
            </div>
            <div className="car-card">
              <div className="car-card-icon">
                <img src={xe2} alt="Mazda 2" />
              </div>
              <h3>Mazda 2</h3>
              <p>Xe 4 chỗ êm ái, phù hợp chuyển đi cá nhân và gia đình nhỏ.</p>
            </div>
            <div className="car-card">
              <div className="car-card-icon">
                <img src={xe3} alt="Kia" />
              </div>
              <h3>Kia</h3>
              <p>Xe đời mới, an toàn và sạch sẽ cho mọi chuyến đi.</p>
            </div>
            <div className="car-card">
              <div className="car-card-icon">
                <img src={xe4} alt="Toyota" />
              </div>
              <h3>Xe 7 chỗ</h3>
              <p>Xe 7 chỗ rộng rãi, phù hợp gia đình và nhóm đi liên tỉnh.</p>
            </div>
            <div className="car-card">
              <div className="car-card-icon">
                <img src={xe5} alt="Toco" />
              </div>
              <h3>Toco</h3>
              <p>Xe 16 chỗ, lý tưởng cho các chuyến đi nhóm lớn.</p>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <SectionTitle title="Khách hàng nói gì" description="Đánh giá thực tế từ khách hàng đã sử dụng dịch vụ."
          />
          <div className="testimonials">
            <article className="testimonial-card">
              <p>“Tài xế rất thân thiện, xe sạch sẽ và giá cước hợp lý. Tôi luôn chọn Taxi Hưng Yên mỗi khi đi công tác.”</p>
              <span>— Anh Tân</span>
            </article>
            <article className="testimonial-card">
              <p>“Xe đến nhanh, đặt trước dễ dàng và phục vụ rất chuyên nghiệp. Tôi rất hài lòng.”</p>
              <span>— Chị Lan</span>
            </article>
          </div>
        </section>

        <section className="contact" id="contact">
          <SectionTitle title="Liên hệ ngay" description="Hotline và thông tin địa chỉ phục vụ nhanh chóng."
          />
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Hotline</h3>
              <p><a href="tel:0372613123">0372 613 123</a></p>
            </div>
            <div className="contact-card">
              <h3>Địa chỉ</h3>
              <p>Phố Nối, Hưng Yên</p>
            </div>
            <div className="contact-card">
              <h3>Email</h3>
              <p>nguyenvanthiensangduyen@gmai.com</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Taxi Hưng Yên © 2026 — Uy tín, nhanh chóng, giá tốt.</p>
      </footer>

      <div className="contact-badges">
        <a className="zalo-widget" href="https://zalo.me/0372613123" target="_blank" rel="noreferrer">
          <span>Zalo</span>
        </a>
        <a className="hotline-widget" href="tel:0372613123">
          <span>Hotline</span> 0372 613 123
        </a>
      </div>
    </div>
  )
}

export default App
