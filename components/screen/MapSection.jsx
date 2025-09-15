const MapSection = () => (
  <div className="w-full h-96 py-3">
    <iframe
      title="apadana"
      src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3239.555!2d51.463133!3d35.658001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1693570680123`}
      width="100%"
      height="100%"
      className=" rounded-xl"
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

export default MapSection;
