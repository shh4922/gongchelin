function loadKakaoMap() {
    const script = document.createElement('script');
    
    script.type="text/javascript"
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAPKEY}&libraries=services,clusterer`;
    // script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=5c6ed55980119571ec1ee0f4cecde093&libraries=services,clusterer"
    document.head.appendChild(script);
    console.log("loadKakaoMap run!")
}

loadKakaoMap()