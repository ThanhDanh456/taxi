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
              <div className="contact-card-header">
                <span className="contact-icon" aria-hidden="true">📞</span>
                <h3>Hotline</h3>
              </div>
              <p><a href="tel:0372613123">0372 613 123</a></p>
            </div>
            <div className="contact-card">
              <div className="contact-card-header">
                <span className="contact-icon" aria-hidden="true">📍</span>
                <h3>Địa chỉ</h3>
              </div>
              <p>Phố Nối, Hưng Yên</p>
            </div>
            <div className="contact-card">
              <div className="contact-card-header">
                <span className="contact-icon" aria-hidden="true">✉️</span>
                <h3>Email</h3>
              </div>
              <p>nguyenvanthiensangduyen@gmai.com</p>
            </div>
            <div className="contact-card">
              <div className="contact-card-header">
                <span className="contact-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 6.486 17.514 2 12 2S2 6.486 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" fill="currentColor"/>
                  </svg>
                </span>
                <h3>Facebook</h3>
              </div>
              <p><a href="https://www.facebook.com/share/1b9kWnLMRA/?mibextid=wwXIfr" target="_blank" rel="noreferrer">Taxi Hưng Yên</a></p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Taxi Hưng Yên © 2026 — Uy tín, nhanh chóng, giá tốt.</p>
      </footer>

      <div className="contact-badges">
        <a className="facebook-widget" href="https://www.facebook.com/share/1b9kWnLMRA/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook Taxi Hưng Yên">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 6.486 17.514 2 12 2S2 6.486 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" fill="currentColor"/>
          </svg>
        </a>
        <a className="zalo-widget" href="https://zalo.me/0372613123" target="_blank" rel="noreferrer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 5.582 2 10c0 2.228 1.303 4.236 3.4 5.75L4 22l5-2.64c.661.2 1.388.34 2.1.34 5.523 0 10-3.582 10-8s-4.477-8-10-8zm1.16 12.64h-3.6l1.8-2.28-1.8-2.28h3.6v1.56H9.94l1.2 1.56-1.2 1.56h3.6v1.44z" fill="currentColor"/>
          </svg>
        </a>
        <a className="hotline-widget" href="tel:0372613123" aria-label="Hotline Taxi Hưng Yên">
          <span aria-hidden="true">☎</span>
        </a>
      </div>
    </div>
  )
}

export default App
