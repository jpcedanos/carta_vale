import os

# Ruta de la carpeta
carpeta = r"C:\Users\jpced\OneDrive\Documentos\para-mi-novia\img"

# Obtener lista de archivos
archivos = os.listdir(carpeta)

# Filtrar solo archivos (ignorar subcarpetas)
archivos = [f for f in archivos if os.path.isfile(os.path.join(carpeta, f))]

# Ordenar archivos (opcional pero recomendable)
archivos.sort()

# Renombrar archivos
for i, archivo in enumerate(archivos, start=1):
    nombre_base, extension = os.path.splitext(archivo)
    
    nuevo_nombre = f"foto{i}{extension}"
    
    ruta_actual = os.path.join(carpeta, archivo)
    nueva_ruta = os.path.join(carpeta, nuevo_nombre)
    
    os.rename(ruta_actual, nueva_ruta)

print("Renombrado completado ✅")
