import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "GadgetGalaxy. - Admin",
    description: "GadgetGalaxy. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
