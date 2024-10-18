import PropTypes from "prop-types";

const MapEmbed = ({ url }) => {
  return (
    <iframe
      className="sm:w-[1200px] md:h-[450px] md:w-full sm:h-[500px] h-[500px] mx-auto rounded-[20px]"
      title="Mapa de ubicación"
      src={url}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

MapEmbed.propTypes = {
  url: PropTypes.string.isRequired,
};

export default MapEmbed;
