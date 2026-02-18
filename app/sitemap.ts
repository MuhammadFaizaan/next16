import { MetadataRoute } from 'next';
import { industriesData } from './lib/industriesData';
import { servicesData } from './lib/servicesData';
import { projects } from './components/Work/WorkData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.nextchainx.io';

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/work',
        '/careers',
        '/contact',
        '/industries',
        '/services',
        '/faq',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic industry routes
    const industryRoutes = industriesData.map((industry) => ({
        url: `${baseUrl}/industries/${industry.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic service category routes
    const serviceCategoryRoutes = servicesData.map((category) => ({
        url: `${baseUrl}/services/${category.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic individual service routes
    const individualServiceRoutes = servicesData.flatMap((category) =>
        category.services.map((service) => ({
            url: `${baseUrl}/services/${category.slug}/${service.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))
    );

    // Dynamic work/project routes
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/work/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [
        ...staticRoutes,
        ...industryRoutes,
        ...serviceCategoryRoutes,
        ...individualServiceRoutes,
        ...projectRoutes,
    ];
}
