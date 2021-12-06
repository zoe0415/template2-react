import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    <footer className="grid grid-cols-4 gap-x-12 p-8 bg-gray-light2 dark:bg-black-light2 dark:text-white">
      <section>
        <h5 className="mb-3 text-xl">Our Work is</h5>
        <div className="mb-6">
          Designed, crafted and built with WordPress, Bootstrap and ACF Pro.
        </div>
        <div>
          <FontAwesomeIcon icon={["far", "copyright"]} />
          2021 WOOLF . All Rights Reserved
        </div>
      </section>
      <section>
        <h5 className="mb-3 text-xl">Get in touch</h5>
        <div>
          <span className="font-semibold">Phone:</span>+1-202-555-0116
        </div>
        <div>
          <FontAwesomeIcon size="lg" className="mr-3" icon={["fab", "facebook"]} />
          <FontAwesomeIcon size="lg" className="mr-3" icon={["fab", "twitter"]} />
          <FontAwesomeIcon size="lg" className="mr-3" icon={["fab", "instagram"]} />
          <FontAwesomeIcon size="lg" className="mr-3" icon={["fab", "youtube"]} />
          <FontAwesomeIcon size="lg" icon={["fab", "telegram"]} />
        </div>
      </section>
      <section>
        <h5 className="mb-3 text-xl">About Us</h5>
        <div>
          WOOLF is a minimalistic, app-styled, rational and functional WordPress
          theme for WooCommerce, based on Bootstrap 4 and Advanced Custom Fields
          (ACF) Pro. Ideal for basic online stores.
        </div>
      </section>
      <section>
        <h5 className="mb-3 text-xl">Secure Payment</h5>
        <div></div>
      </section>
    </footer>
  )
}
export default Footer
