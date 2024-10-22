#Ejercicio 1
class Persona():
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def identificador(self):
        print(f"Hola soy  {self.nombre} y tengo {self.edad} años")


    def es_mayor_de_edad(self):
        if self. edad >= 18:
            return True
        else:
            return False

    def es_mayor_que(self, otra_persona):
        if self.edad > otra_persona.edad:
            return True
        else:
            return False
        
    @staticmethod    
    def get_mayor(persona, otra_persona):
        if persona.edad > otra_persona.edad:
            return persona
        else:
            return otra_persona

"""
persona1 = Persona("Camila", 21)
persona2 = Persona("Joaquín", 17)
persona1.identificador()
persona2.identificador()

mayor = Persona.get_mayor(persona1, persona2)
print(f"La perosna mayor es {mayor.nombre} y tiene {mayor.edad} años")

"""    

#Ejercicio 6
class Alumno():
    def __init__(self, nombre, nota):
        self.nombre = nombre
        self.nota = nota

    def datos_alumno(self):
        print(f"El alumno {self.nombre} saco una nota de {self.nota}")

    def esta_aprobado(self):
        if self.nota >= 6:
            print(f"El/la alumn@ {self.nombre} aprobó")
        else:
            print(f"El/la alumn@ {self.nombre} no aprobó")
"""
alumno1 = Alumno("Camila", 9)
alumno2 = Alumno("Federico", 5)        
    
alumno1.datos_alumno()
alumno1.esta_aprobado()
alumno2.datos_alumno()
alumno2.esta_aprobado()
"""

#Ejercicio 7 
class Triangulo():
    def __init__(self, lado1, lado2, lado3):
        self.lado1 = lado1
        self.lado2 = lado2
        self.lado3 = lado3

    def lado_mayor(self):
        return max(self.lado1, self.lado2, self.lado3)
        
    def tipo_triangulo(self):
        if self.lado1 == self.lado2 == self.lado3:
            print("Es un triangulo equilaero")
        elif self.lado1 == self.lado2 or self.lado1 == self.lado3 or self.lado2 == self.lado1 or self.lado2 == self.lado3:
            print("El triangulo es isosceles")
        else:
            print("El trianglo es escaleno")

lado1 = float(input("Ingrese la medida de lado 1"))
lado2 = float(input("Ingrese la medida de lado 2"))
lado3 = float(input("Ingrese la medida de lado 3"))
        
triangulo = Triangulo
        

    

