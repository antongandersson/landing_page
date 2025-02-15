import streamlit as st
import base64
from datetime import datetime

def get_base64_encoded_image(image_path):
    try:
        with open(image_path, "rb") as f:
            return base64.b64encode(f.read()).decode()
    except:
        # Returner en fallback hvis billedet ikke findes
        return ""

def main():
    # Page configuration
    st.set_page_config(
        page_title="PayTjek | Automatisk Lønseddelkontrol",
        page_icon=":money_with_wings:",
        layout="wide",
        initial_sidebar_state="collapsed"
    )

    # Load custom CSS and JavaScript
    with open("styles.css") as f:
        st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)
    
    with open("animations.js") as f:
        st.markdown(f"<script>{f.read()}</script>", unsafe_allow_html=True)

    # Get base64 encoded images
    logo_base64 = get_base64_encoded_image("logo.png")

    # Navigation
    st.markdown(f"""
        <nav class="nav-container">
            <img src="data:image/png;base64,{logo_base64}" class="nav-logo" alt="PayTjek Logo"/>
            <div class="nav-links">
                <a href="#signup" class="nav-link brand-text">Pay<span class="brand-highlight">Tjek</span></a>
            </div>
        </nav>
    """, unsafe_allow_html=True)

    # Features list
    features = [
        "Fuldautomatisk løntjek med AI og OCR-teknologi",
        "Dynamisk opdatering med nyeste overenskomstregler",
        "Øjeblikkelig fejlrapport med klare anbefalinger",
        "GDPR-compliant med sikker datahåndtering"
    ]

    # Hero Section with features instead of image
    features_html = ''.join([f'<div class="feature-item"><i class="ri-check-line"></i>{feature}</div>' for feature in features])
    
    st.markdown(f"""
        <div class="hero-section">
            <div class="hero-content">
                <h1 class="hero-title">Automatisk Lønseddelkontrol med AI</h1>
                <p class="hero-subtitle">
                    Over 50% af lønmodtagere oplever fejl på deres lønsedler. 
                    Vi bruger AI til at automatisere kontrollen og sikre dig den løn, du har krav på.
                </p>
                <button class="cta-button">Early Acces</button>
            </div>
            <div class="hero-features-container">
                {features_html}
            </div>
        </div>
    """, unsafe_allow_html=True)

if __name__ == "__main__":
    main()