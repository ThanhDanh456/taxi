import heroImage from './assets/ss111.png'
import taxiIcon from './assets/taxi-icon.svg'
import iconSavings from './assets/heo.webp'
import icon247 from './assets/24.jpg'
import iconSpeed from './assets/likee.png'
import iconQuality from './assets/tich.jpg'
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
          <input id="nav-toggle" className="nav-toggle" type="checkbox" aria-hidden="true" />
          <label htmlFor="nav-toggle" className="menu-toggle" aria-label="Mở menu">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </label>
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
              icon={iconSavings}
            />
            <FeatureCard
              title="Phục vụ 24/7"
              description="Đặt xe mọi lúc, không lo giờ giấc. Luôn có tổng đài sẵn sàng hỗ trợ."
              icon={icon247}
            />
            <FeatureCard
              title="Nhanh chóng"
              description="Xe đến nhanh trong vòng 5-10 phút tại khu vực Hưng Yên."
              icon={iconSpeed}
            />
            <FeatureCard
              title="Chất lượng"
              description="Xe đời mới, sạch sẽ, lái xe lịch sự và an toàn."
              icon={iconQuality}
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
              <h3>Toyota Fortuner</h3>
              <p>Xe 7 chỗ rộng rãi, phù hợp gia đình và nhóm đi liên tỉnh.</p>
            </div>
            <div className="car-card">
              <div className="car-card-icon">
                <img src={xe5} alt="Toco" />
              </div>
              <h3>Thaco</h3>
              <p>Xe 16 chỗ, lý tưởng cho các chuyến đi nhóm lớn.</p>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <SectionTitle title="Vì sao chọn chúng tôi" description="Khách hàng tin tưởng Taxi Hưng Yên vì dịch vụ nhanh, an toàn và minh bạch." />
          <div className="testimonials">
            <article className="testimonial-card">
              <div className="testimonial-avatar">
                <img src="https://tse1.mm.bing.net/th/id/OIP.C9GCxynkzyUqjeY4aFvu9gHaLH?r=0&cb=thfc1falcon&w=536&h=804&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Avatar Nguyễn Hoàng" />
              </div>
              <h3>Nguyễn Hoàng</h3>
              <div className="testimonial-rating">★★★★★</div>
              <p>“Tôi rất ấn tượng với đội ngũ tài xế của Taxi Hưng Yên: đúng giờ, thân thiện và luôn hỗ trợ nhiệt tình. Chuyến đi của tôi trở nên dễ chịu và an tâm hơn.”</p>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-avatar">
                <img src="https://images.hukumonline.com/frontend/lt688d03cc30a08/lt688d040d1ab0e.jpg" alt="Avatar Quốc Lập" />
              </div>
              <h3>Quốc Lập</h3>
              <div className="testimonial-rating">★★★★★</div>
              <p>“Giá cước rõ ràng, không phát sinh, dịch vụ hỗ trợ khách hàng nhanh chóng. Tôi luôn chọn Taxi Hưng Yên cho các chuyến công tác và đi chơi cùng gia đình.”</p>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-avatar">
                <img src="https://chcbiotech.com/theme/design/img/sub7/img1_2.jpg" alt="Avatar Trần Ngọc" />
              </div>
              <h3>Trần Ngọc</h3>
              <div className="testimonial-rating">★★★★★</div>
              <p>“Xe đời mới, nội thất sạch sẽ và chạy êm. Tôi rất yên tâm khi đặt xe cho cả gia đình đi du lịch tỉnh ngoài.”</p>
            </article>
            <article className="testimonial-card">
              <div className="testimonial-avatar">
                <img src="https://thf.bing.com/th/id/OIP.QRvEfqT6TV53l1Jl6MrDcwHaHa?r=0&o=7&cb=thfc1falconrm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Avatar Lan Diễm" />
              </div>
              <h3>Lan Diễm</h3>
              <div className="testimonial-rating">★★★★★</div>
              <p>“Dịch vụ đặt xe nhanh, tài xế hỗ trợ tận tâm và xe đến đúng giờ. Taxi Hưng Yên là lựa chọn đáng tin cậy cho mọi hành trình.”</p>
            </article>
          </div>
          <div className="testimonial-cta">
            <p>Nhận tư vấn và báo giá miễn phí ngay hôm nay.</p>
            <a className="primary button" href="#contact">Báo giá miễn phí</a>
          </div>
        </section>

        <section className="service-area">
          <SectionTitle title="Khu vực chạy taxi" description="Dịch vụ xe taxi Hưng Yên hân hạnh phục vụ quý khách khắp các tuyến thành phố và tỉnh lân cận." />
          <div className="service-area-inner">
            <div className="service-map">
              <iframe
                title="Bản đồ Hưng Yên"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15313.921809529507!2d106.12379477368178!3d20.977107783601228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31347f4e5fce45b7%3A0xe31710ceec95d05f!2zSOG7kyBZw6puIELhuq1uIEjhuqlu!5e0!3m2!1svi!2s!4v1706100000000!5m2!1svi!2s"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="service-area-info">
              <ul className="service-area-list">
                <li>Hưng Yên - Hà Nội</li>
                <li>Hưng Yên - Vĩnh Phúc</li>
                <li>Hưng Yên - Yên Bái</li>
                <li>Hưng Yên - Tuyên Quang</li>
                <li>Hưng Yên - Thái Nguyên</li>
                <li>Hưng Yên - Sơn La</li>
                <li>Hưng Yên - Thái Bình</li>
                <li>Hưng Yên - Hải Dương</li>
                <li>Hưng Yên - Hải Phòng</li>
                <li>Hưng Yên - Ninh Bình</li>
                <li>Hưng Yên - Nam Định</li>
                <li>Hưng Yên - Thanh Hóa</li>
                <li>Hưng Yên - Nghệ An</li>
              </ul>
            </div>
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
              <p>0372 613 123</p>
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
           
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Taxi Hưng Yên © 2026 — Uy tín, nhanh chóng, giá tốt.</p>
      </footer>

      <div className="contact-badges">
        <a
  className="facebook-widget"
  href="https://www.facebook.com/share/1b9kWnLMRA/?mibextid=wwXIfr"
  target="_blank"
  rel="noreferrer"
  aria-label="Facebook Taxi Hưng Yên"
>
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12C22 6.486 17.514 2 12 2S2 6.486 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z"
      fill="#ffffff"
    />
  </svg>
</a>
        <a
  className="zalo-widget"
  href="https://zalo.me/0372613123"
  target="_blank"
  rel="noreferrer"
  aria-label="Zalo Taxi Hưng Yên"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
    alt="Zalo"
    className="zalo-icon"
  />
</a>
        <a className="hotline-widget" href="tel:0372613123" aria-label="Hotline Taxi Hưng Yên">
          <span aria-hidden="true">☎</span>
        </a>
      </div>
    </div>
  )
}

export default App
