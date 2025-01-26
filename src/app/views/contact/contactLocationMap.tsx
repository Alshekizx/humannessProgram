"use client";

const LocationMap = () => {
    return (
        <section className="py-16 px-6 sm:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto ">
                <h2 className="text-3xl font-bold text-center text-primary mb-6">
                    Find Us
                </h2>
                <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
                    Visit our office or connect with us in person to learn more about our initiatives. We&apos;d love to see you!
                </p>

                {/* Google Map Embed */}
                <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        title="Humanness Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509372!2d144.96305791590425!3d-37.81362774202105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c5f0e0aefe3e!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1674459348754!5m2!1sen!2sau"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;