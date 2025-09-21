import os

# List of HTML files to update
html_files = [
    'parents.html',
    'programs.html',
    'resources.html',
    'schools.html',
    'products.html'
]

# Update each file
for file in html_files:
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace desktop navigation link
        content = content.replace(
            '<a href="#" class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-purple-600',
            '<a href="about.html" class="px-3 py-2 text-sm font-medium text-gray-900 hover:text-purple-600',
            1  # Only replace first occurrence in each file (desktop nav)
        )
        
        # Replace mobile navigation link
        content = content.replace(
            '<a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700',
            '<a href="about.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700',
            1  # Only replace first occurrence in each file (mobile nav)
        )
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")
        
    except Exception as e:
        print(f"Error updating {file}: {str(e)}")

print("All files have been updated.")
