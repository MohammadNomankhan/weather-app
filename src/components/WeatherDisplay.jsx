import React from "react";
import sunImage from "../assets/Sun.png";
import locationImage from "../assets/Location.png";
import moment from "moment";
// import { Button } from "semantic-ui-react";
import "./styles.css";

const WeatherDisplay = ({ weatherData }) => {
	return (
		<>
			<div className="grid">
				<div className="card">
					<h4 className="header">{weatherData.name}</h4>
					<div className="main">
						<div className="flex">
							<p className="day">
								{moment().format("dddd")},{" "}
								<span>{moment().format("LL")}</span>
							</p>
							<p
								className="description"
								style={{
									fontWeight: "700",
									fontSize: "1.35rem",
								}}
							>
								{weatherData.weather[0].main}
							</p>
						</div>

						<div className="flex">
							<p className="temp">
								Temprature:{" "}
								{(weatherData.main.temp - 273.15).toFixed(2)}{" "}
								&deg;C
							</p>
							<p className="temp">
								Humidity: {weatherData.main.humidity} %
							</p>
						</div>

						<div className="flex">
							<p className="sunrise-sunset">
								Sunrise:{" "}
								{new Date(
									weatherData.sys.sunrise * 1000
								).toLocaleTimeString("en-IN")}
							</p>
							<p className="sunrise-sunset">
								Sunset:{" "}
								{new Date(
									weatherData.sys.sunset * 1000
								).toLocaleTimeString("en-IN")}
							</p>
						</div>
					</div>
					<div className="shine"></div>
					<div className="background">
						<div className="tiles">
							<div className="tile tile-1"></div>
							<div className="tile tile-2"></div>
							<div className="tile tile-3"></div>
							<div className="tile tile-4"></div>

							<div className="tile tile-5"></div>
							<div className="tile tile-6"></div>
							<div className="tile tile-7"></div>
							<div className="tile tile-8"></div>

							<div className="tile tile-9"></div>
							<div className="tile tile-10"></div>
						</div>

						<div className="line line-1"></div>
						<div className="line line-2"></div>
						<div className="line line-3"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WeatherDisplay;
