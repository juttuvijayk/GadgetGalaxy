import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "GadgetGalaxy. - Store Dashboard",
    description: "GadgetGalaxy. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
