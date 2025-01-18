# CV-PREVIEWER
AN AI DRIVEN  DASHBOARD ALLOWING TO AUTOMATE CV PREVIEWING FOR HR
import streamlit as st
from PIL import Image

# Main function
def main():
    # Set up the title and header
    st.set_page_config(page_title="AI-Driven CV Preview Dashboard", layout="wide")
    st.title("AI-Driven CV Preview Dashboard for HR")
    st.write("This dashboard allows HR professionals to preview and analyze CVs with AI-driven insights.")

    # Sidebar navigation
    st.sidebar.title("Navigation")
    menu = ["Home", "Upload CV", "AI Analysis", "Settings", "About"]
    choice = st.sidebar.selectbox("Select Page:", menu)

    if choice == "Home":
        st.header("Welcome to the AI-Driven CV Preview Dashboard")
        st.write("Navigate through the sidebar to upload CVs and view AI-generated insights.")

    elif choice == "Upload CV":
        st.header("Upload CV")
        st.write("Upload a CV in PDF format for AI analysis.")
        uploaded_file = st.file_uploader("Choose a CV file", type=["pdf"])

        if uploaded_file:
            with st.spinner("Processing the CV..."):
                # Placeholder for CV processing (replace with actual logic)
                st.success("CV uploaded successfully!")
                st.write("**File Name:**", uploaded_file.name)

    elif choice == "AI Analysis":
        st.header("AI Analysis of CV")
        st.write("View AI-driven insights for the uploaded CV.")
        # Placeholder for AI analysis results (replace with actual logic)
        st.info("Upload a CV in the 'Upload CV' section to enable analysis.")

    elif choice == "Settings":
        st.header("Settings")
        st.write("Configure dashboard settings.")
        theme = st.selectbox("Choose Theme:", ["Light", "Dark"])
        st.write(f"Selected theme: {theme}")

    elif choice == "About":
        st.header("About")
        st.write("This AI-driven dashboard is designed to help HR professionals efficiently analyze CVs. Built with Streamlit.")
        st.write("**Repository:** [GitHub](https://github.com/your-repo-link)")

# Run the main function
if __name__ == "__main__":
    main()
