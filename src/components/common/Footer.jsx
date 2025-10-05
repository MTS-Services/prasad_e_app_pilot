import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "../../assets/logo1.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <div>
      {/* CTA Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="lg:w-10/12 mx-auto max-w-7xl">
          <div className="bg-green-900 relative -mb-42 z-40 rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              {t("footer.cta.title")}
            </h2>
            <p className="text-white text-sm md:text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
              {t("footer.cta.description")}
            </p>
            <button className="btn btn-sm md:btn-md lg:btn-lg bg-white hover:bg-gray-100 text-green-500 font-semibold px-8 py-3 rounded-lg transition-colors shadow-md">
              {t("footer.cta.button")}
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#002201] -z-0 text-white px-4 sm:px-6 md:px-8 lg:px-10 pt-40 py-12">
        <div className="lg:w-10/12 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center mb-4">
                <img src={logo} alt="Logo" />
                <span className="font-bold text-lg">{t("footer.brand.name")}</span>
              </div>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {t("footer.brand.description")}
              </p>
            </div>

            {/* Service Column */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{t("footer.service.title")}</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                {t("footer.service.items", { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{t("footer.company.title")}</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                {t("footer.company.items", { returnObjects: true }).map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{t("footer.contact.title")}</h3>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{t("footer.contact.address")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>{t("footer.contact.phone")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>{t("footer.contact.email")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <footer className="py-3 bg-black text-center text-gray-400 text-sm">
        © {currentYear} {t("footer.copyright")}
      </footer>
    </div>
  );
}
