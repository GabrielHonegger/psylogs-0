from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

SEXOS = {
    "M": "Masculino",
    "F": "Feminino",
    "N": "Não Aplicável"
}

RELIGIOES = {
    "C": "Cristianismo",
    "I": "Islamismo",
    "H": "Hinduísmo",
    "B": "Budismo",
    "J": "Judaísmo",
    "E": "Espiritismo",
    "T": "Taioísmo",
    "A": "Ateísmo",
    "O": "Outra",
    "N": "Não Aplicável"
}

ESCOLARIDADES = {
    "INFANTIL": "Educação Infantil (Pré-escola",
    "EF1": "Ensino Fundamental I",
    "EF2": "Ensino Fundamental II",
    "MEDIO": "Ensino Médio",
    "TECNICO": "Ensino Técnico e Profissionalizante",
    "SUPERIOR_INCOMPLETO": "Ensino Superior Incompleto",
    "SUPERIOR_COMPLETO": "Ensino Superior Completo",
    "POS_GRADUACAO": "Pós-Graduação",
    "POS_DOUTORADO": "Pós-Doutorado",
    "N/A": "Não Aplicável"
}

# Create your models here.
class Patient(models.Model):
    nome = models.CharField(max_length=60, unique=True, blank=False)
    idade = models.IntegerField(
        validators = [
            MinValueValidator(0),
            MaxValueValidator(120)
        ]
    )
    sexo = models.CharField(max_length=1, choices=SEXOS, default="N")
    nucleos = models.IntegerField(blank=True, default=0)
    """
    Núcleos:
    - Mãe (1)
    - Pai (2)
    - Irmãos (4)
    - Filhos (8)
    - Avós (16)
    """
    religiao = models.CharField(max_length=1, choices=RELIGIOES, default="N")
    escolaridade = models.CharField(max_length=25, choices=ESCOLARIDADES, default="N/A")
    trabalho = models.CharField(max_length=70, default="")

    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Paciente {self.nome}"