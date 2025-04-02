import os
import django


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'House.settings')  # Remplace "mon_projet" par le nom de ton projet
django.setup()

from profil.models import Article


# Créer un article
def create_article():
    article = Article.objects.create(
        title="Article depuis un script",
        content="Ceci est un article ajouté depuis un fichier."
    )
    print(f"Article créé: {article}")


def list_articles():
    articles = Article.objects.all()
    if articles.exists():
        print("\nListe des articles :")
        for article in articles:
            print(f"ID={article.id}, Titre={article.title}, Contenu={article.content}, Créé le {article.date_created}")
    else:
        print("\nAucun article trouvé.")


def delete_all_articles():
    deleted_count, _ = Article.objects.all().delete()
    print(f"Tous les articles ({deleted_count}) ont été supprimés.")


create_article()
list_articles()
#delete_all_articles()
