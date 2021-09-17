import React, { FunctionComponent } from 'react';

interface YoutubeIconProps {
  width ?: number;
  height ?: number;
}

const defaultProps: YoutubeIconProps = {
  width: 24,
  height: 24,
};

const YoutubeIcon: FunctionComponent<YoutubeIconProps> = ({
  width = 24,
  height = 24,
}) => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={width} height={height}>
      <linearGradient id="3hXF6bmA1hdaWqDtRL46ua" x1="7.421" x2="50.57" y1="19.248" y2="52.44" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#f52537" />
        <stop offset=".293" stopColor="#f32536" />
        <stop offset=".465" stopColor="#ea2434" />
        <stop offset=".605" stopColor="#dc2231" />
        <stop offset=".729" stopColor="#c8202c" />
        <stop offset=".841" stopColor="#ae1e25" />
        <stop offset=".944" stopColor="#8f1a1d" />
        <stop offset="1" stopColor="#7a1818" />
      </linearGradient>
      <path fill="url(#3hXF6bmA1hdaWqDtRL46ua)" d="M38.799,26.439c0-2.342-1.94-4.24-4.329-4.24c-3.412-0.143-6.905-0.203-10.47-0.198 c-3.563-0.005-7.056,0.056-10.47,0.198c-2.387,0-4.327,1.898-4.327,4.24C9.061,28.291,8.995,30.145,9,32.001 c-0.005,1.853,0.06,3.707,0.204,5.561c0,2.345,1.938,4.243,4.326,4.243c3.414,0.14,6.907,0.2,10.47,0.195 c3.564,0.008,7.058-0.056,10.47-0.195c2.389,0,4.329-1.898,4.329-4.243c0.142-1.854,0.209-3.708,0.201-5.561 C39.008,30.145,38.941,28.291,38.799,26.439z" />
      <path d="M37.728,31.292c0-1.225-0.332-2.208-0.985-2.925c-0.684-0.75-1.629-1.129-2.811-1.129 c-1.153,0-2.116,0.39-2.86,1.159c-0.176,0.181-0.332,0.376-0.466,0.584c-0.084-0.182-0.183-0.35-0.295-0.504 c-0.533-0.731-1.326-1.117-2.292-1.117c-0.139,0-0.277,0.011-0.415,0.032v-2.149c0-0.664-0.541-1.203-1.206-1.203h-1.837 c-0.666,0-1.207,0.54-1.207,1.203v2.404c-0.172-0.094-0.359-0.161-0.568-0.161h-1.821c-0.295,0-0.566,0.106-0.776,0.283 c-0.209-0.176-0.48-0.283-0.775-0.283h-0.658c0.032-0.109,0.068-0.217,0.068-0.336v-1.904c0-0.664-0.541-1.204-1.206-1.204h-6.291 c-0.665,0-1.205,0.54-1.205,1.204v1.904c0,0.664,0.541,1.203,1.205,1.203h0.914v10.03c0,0.664,0.541,1.204,1.206,1.204h2.049 c0.661,0,1.197-0.534,1.204-1.193c0.07,0.148,0.151,0.286,0.245,0.412c0.44,0.594,1.122,0.921,1.919,0.921 c0.488,0,0.959-0.114,1.43-0.347c0.196,0.132,0.43,0.206,0.674,0.206h1.822c0.354,0,0.665-0.159,0.885-0.402 c0.221,0.243,0.532,0.402,0.886,0.402h1.837c0.17,0,0.338-0.036,0.492-0.105c0.383,0.15,0.799,0.226,1.239,0.226 c0.915,0,1.67-0.349,2.183-1.007c0.122-0.155,0.229-0.324,0.318-0.508c0.099,0.157,0.21,0.305,0.332,0.444 c0.695,0.792,1.674,1.211,2.83,1.211c1.262,0,2.251-0.387,2.94-1.15c0.66-0.73,0.995-1.758,0.995-3.054v-0.729 c0-0.203-0.052-0.399-0.146-0.573c0.095-0.174,0.147-0.372,0.147-0.575V31.292z" opacity=".05" />
      <linearGradient id="3hXF6bmA1hdaWqDtRL46ub" x1="15.63" x2="35.545" y1="6.211" y2="23.573" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#4c4c4c" />
        <stop offset="1" stopColor="#343434" />
      </linearGradient>
      <path fill="url(#3hXF6bmA1hdaWqDtRL46ub)" d="M14.539,6h2.125l1.37,5.496h0.133l1.308-5.493h2.147l-2.458,8.036V20h-2.112v-5.703L14.539,6z M21.525,11.923c0-0.784,0.254-1.411,0.759-1.874c0.504-0.466,1.182-0.7,2.035-0.7c0.778,0,1.413,0.245,1.908,0.737 c0.495,0.488,0.743,1.121,0.743,1.894v5.235c0,0.866-0.242,1.548-0.728,2.044C25.756,19.753,25.09,20,24.235,20 c-0.823,0-1.477-0.259-1.974-0.767c-0.493-0.508-0.738-1.194-0.738-2.055v-5.256h0.002V11.923z M23.455,17.368 c0,0.275,0.066,0.494,0.205,0.646c0.132,0.15,0.322,0.226,0.571,0.226c0.255,0,0.454-0.077,0.604-0.234 c0.149-0.151,0.226-0.366,0.226-0.638v-5.522c0-0.22-0.079-0.399-0.231-0.536c-0.151-0.135-0.352-0.205-0.599-0.205 c-0.229,0-0.417,0.07-0.561,0.205c-0.143,0.137-0.215,0.316-0.215,0.536L23.455,17.368z M33.918,9.605V20h-1.875v-1.266 c-0.346,0.414-0.705,0.728-1.081,0.941C30.59,19.89,30.227,20,29.876,20c-0.435,0-0.76-0.149-0.981-0.452 c-0.221-0.3-0.329-0.751-0.329-1.357V9.605h1.874v7.886c0,0.236,0.04,0.41,0.12,0.519c0.075,0.104,0.207,0.162,0.38,0.162 c0.141,0,0.315-0.071,0.522-0.215c0.213-0.141,0.406-0.324,0.581-0.544V9.605H33.918z" />
      <g opacity=".07">
        <path d="M37.228,31.292c0-1.096-0.288-1.967-0.854-2.588c-0.584-0.641-1.406-0.966-2.441-0.966c-1.013,0-1.855,0.339-2.502,1.008 c-0.556,0.571-0.861,1.294-0.938,2.139c-0.016-0.884-0.209-1.598-0.584-2.113c-0.435-0.596-1.087-0.912-1.888-0.912 c-0.308,0-0.614,0.063-0.915,0.189v-2.807c0-0.388-0.317-0.703-0.706-0.703h-1.837c-0.39,0-0.707,0.315-0.707,0.703v13.14 c0,0.388,0.317,0.704,0.707,0.704h1.837c0.174,0,0.333-0.063,0.456-0.167c0.002,0.001,0.004,0.002,0.006,0.003 c0.38,0.189,0.807,0.285,1.269,0.285c0.755,0,1.375-0.283,1.791-0.816c0.385-0.488,0.581-1.167,0.581-2.018l0-0.133 c0.091,0.828,0.364,1.526,0.837,2.066c0.598,0.681,1.447,1.041,2.455,1.041c1.115,0,1.979-0.332,2.569-0.985 c0.574-0.636,0.866-1.551,0.866-2.719v-0.729c0-0.236-0.117-0.446-0.297-0.574c0.18-0.128,0.298-0.337,0.298-0.574V31.292z M27.214,36.114c0,0.067-0.003,0.118-0.008,0.157c-0.02-0.004-0.037-0.01-0.054-0.019c-0.011-0.006-0.026-0.014-0.045-0.027v-5.401 c0.03-0.013,0.052-0.018,0.065-0.02c0.017,0.042,0.042,0.139,0.042,0.304V36.114z M33.748,31.278c0-0.266,0.033-0.397,0.028-0.427 c0.015-0.002,0.039-0.005,0.075-0.005l0.022-0.048c0.001,0.001,0.067,0.109,0.067,0.48v0.274h-0.193V31.278z M33.943,34.914v0.675 c0,0.378-0.031,0.578-0.049,0.666c-0.019,0.007-0.041,0.017-0.069,0.028c-0.003-0.006-0.076-0.155-0.076-0.692V34.47h0.353 C34.002,34.591,33.943,34.746,33.943,34.914z" />
        <path d="M18.323,27.149v-1.904c0-0.388-0.317-0.704-0.706-0.704h-6.291c-0.389,0-0.705,0.316-0.705,0.704v1.904 c0,0.388,0.316,0.703,0.705,0.703h1.414v10.53c0,0.388,0.316,0.704,0.706,0.704h2.049c0.389,0,0.706-0.316,0.706-0.704v-10.53 h1.416C18.006,27.852,18.323,27.537,18.323,27.149z" />
        <path d="M22.786,27.985h-1.821c-0.39,0-0.707,0.316-0.707,0.704v7.089c-0.044,0.044-0.09,0.084-0.139,0.123v-7.212 c0-0.388-0.317-0.704-0.706-0.704h-1.821c-0.39,0-0.707,0.316-0.707,0.704v8.1c0,0.726,0.154,1.303,0.46,1.719 c0.349,0.471,0.874,0.719,1.518,0.719c0.475,0,0.936-0.131,1.406-0.4c0.036-0.02,0.071-0.041,0.106-0.062 c0.126,0.193,0.344,0.321,0.592,0.321h1.822c0.389,0,0.706-0.316,0.706-0.705l-0.003-9.692 C23.492,28.301,23.175,27.985,22.786,27.985z" />
      </g>
      <path fill="#fff" d="M24.561,38.586h1.837c0.113,0,0.206-0.09,0.206-0.204v-0.233c0.152,0.134,0.313,0.242,0.479,0.325 c0.313,0.156,0.663,0.233,1.046,0.233c0.601,0,1.072-0.208,1.398-0.626C29.841,37.683,30,37.109,30,36.373l-0.002-5.374 c0-0.832-0.167-1.483-0.495-1.933c-0.341-0.468-0.843-0.706-1.484-0.706c-0.316,0-0.632,0.086-0.941,0.256 c-0.164,0.093-0.324,0.207-0.474,0.343v-3.717c0-0.112-0.093-0.203-0.206-0.203h-1.837c-0.115,0-0.207,0.091-0.207,0.203v13.14 C24.354,38.496,24.447,38.586,24.561,38.586z M26.607,30.579c0.088-0.088,0.172-0.151,0.258-0.193 c0.299-0.15,0.563-0.08,0.697,0.098c0.099,0.132,0.152,0.347,0.152,0.625v5.005c0,0.321-0.062,0.469-0.119,0.54 c-0.023,0.032-0.095,0.123-0.326,0.123c-0.122,0-0.235-0.025-0.346-0.08c-0.099-0.051-0.206-0.131-0.316-0.242V30.579z" />
      <path fill="#fff" d="M36.727,35.643v-0.729c0-0.114-0.091-0.204-0.205-0.204H34.65c-0.114,0-0.207,0.09-0.207,0.204v0.675 c0,0.708-0.102,0.93-0.139,0.988c-0.081,0.109-0.239,0.164-0.469,0.164c-0.286,0-0.385-0.111-0.438-0.199 c-0.066-0.106-0.148-0.359-0.148-0.951V33.97h3.273c0.114,0,0.206-0.091,0.207-0.204h-0.001v-2.474c0-0.967-0.244-1.725-0.724-2.251 c-0.485-0.532-1.182-0.803-2.072-0.803c-0.87,0-1.594,0.289-2.144,0.857c-0.552,0.566-0.83,1.304-0.83,2.196v4.352 c0,0.979,0.255,1.762,0.755,2.333c0.505,0.575,1.207,0.871,2.079,0.871c0.968,0,1.708-0.277,2.198-0.82 C36.478,37.487,36.727,36.687,36.727,35.643z M33.248,31.278c0-0.453,0.081-0.661,0.145-0.752c0.09-0.122,0.239-0.18,0.458-0.18 c0.21,0,0.354,0.056,0.439,0.175c0.068,0.102,0.151,0.311,0.151,0.757v0.774h-1.193V31.278z" />
      <path fill="#fff" d="M15.701,38.382v-11.03h1.916c0.115,0,0.206-0.092,0.206-0.203v-1.904 c0-0.112-0.092-0.204-0.206-0.204h-6.291c-0.113,0-0.205,0.092-0.205,0.204v1.904c0,0.111,0.092,0.203,0.205,0.203h1.914v11.03 c0,0.111,0.092,0.204,0.206,0.204h2.049C15.609,38.586,15.701,38.493,15.701,38.382z" />
      <path fill="#fff" d="M22.992,28.689c0-0.112-0.092-0.204-0.206-0.204h-1.821c-0.115,0-0.207,0.092-0.207,0.204v7.283 c-0.139,0.166-0.297,0.31-0.473,0.425c-0.217,0.147-0.337,0.169-0.389,0.169c-0.155,0-0.192-0.05-0.205-0.067 c-0.028-0.039-0.072-0.138-0.072-0.382v-7.428c0-0.112-0.092-0.204-0.206-0.204h-1.821c-0.115,0-0.207,0.092-0.207,0.204v8.1 c0,0.618,0.123,1.097,0.361,1.421c0.253,0.341,0.629,0.517,1.117,0.517c0.384,0,0.763-0.109,1.16-0.336 c0.252-0.142,0.495-0.327,0.738-0.56v0.551c0,0.111,0.092,0.204,0.206,0.204h1.822c0.114,0,0.206-0.093,0.206-0.204v-0.001h-0.003 V28.689z" />
    </svg>
  </>
);

YoutubeIcon.defaultProps = defaultProps;

export default YoutubeIcon;
